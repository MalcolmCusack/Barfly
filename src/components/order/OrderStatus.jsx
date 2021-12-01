import { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import {
    Button,
    Collapse,
    IconButton,
    Paper,
    Tooltip,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useTimeout } from "../../hooks/timing";
import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";
import CancelIcon from "@mui/icons-material/Cancel";
import { useNavigate } from "react-router";
import { onOrderByUserId} from '../../graphql/subscriptions';
import { useStateValue } from "../../state/StateProvider";
import {listOrders} from "../../graphql/queries";

//In case subscriptions delete themselves again some how
/*	onOrderByUserId(userID: String): Order
		@aws_subscribe(mutations: ["updateOrder"])
@aws_api_key
@aws_iam
	onOrderByOrderId(id: String!): Order
		@aws_subscribe(mutations: ["updateOrder"])
@aws_api_key
@aws_iam
*/

function OrderItem({ orderItem, style }) {
    console.log(orderItem)
    const [showItems, setShowItems] = useState(false);
    const [showCancel, setShowCancel] = useState(false);
    const timeout = useTimeout();

    const [order, setOrder] = useState(orderItem)
    const [items, setItems] = useState(JSON.parse(orderItem.items))


    function openCancel() {
        try {
            setShowCancel(true);
        } finally {
            timeout(() => setShowCancel(false), 3000);
        }
    }

    const [{ user }, dispatch ] = useStateValue()

    useEffect(() => {
        
        const subscribe = async () => {

            
            console.log(user.attributes.sub)
            const userSub = API.graphql({
                query: onOrderByUserId, 
                variables: {
                    userID: user.attributes.sub,
            }})
            .subscribe({
                next: (orderData) => {
                    console.log("userSubData: ", orderData)
                    const mutatedOrder = orderData.value.data.onOrderByUserId
                    console.log(mutatedOrder)
                    if (typeof mutatedOrder !== undefined && typeof order !== undefined) {
                        if(order.id === mutatedOrder.id) {
                            console.log("hit")

                            setOrder({...order, orderStatus: mutatedOrder.orderStatus})
                        }
                    }
                    

                }
            })

            const userSubResponse = await userSub
            
            console.log(userSubResponse)
            
        }
        subscribe()

    }, [])

    return (
        <Paper onClick={() => setShowItems((show) => !show)} style={style}>
            <Box display="flex" flexDirection="row">
                <Typography>
                    $
                    {items
                        .reduce((total, item) => total + item.price, 0.0)
                        .toFixed(2)}
                    {" - "}
                    {items.length} item
                    {items.length !== 1 && "s"}
                    {" - "}
                    {order.orderStatus}

                </Typography>
                
                <Box position="relative" bottom="1ch" flexGrow="1">
                    <Collapse
                        in={!showCancel}
                        style={{ position: "absolute", right: "1ch"}}
                    >
                        <Tooltip title="Cancel" placement="left">
                            <IconButton
                                color="primary"
                                onClick={(e) => {
                                    openCancel();
                                    e.stopPropagation();
                                }}
                            >
                                <DoNotDisturbIcon />
                            </IconButton>
                        </Tooltip>
                    </Collapse>
                    <Collapse
                        in={showCancel}
                        style={{ position: "absolute", right: "1ch" }}
                    >
                        <Tooltip title="Tap Again to Cancel" open={showCancel} placement="left">
                            <IconButton
                                color="primary"
                                onClick={(e) => {
                                    e.stopPropagation();
                                }}
                            >
                                <CancelIcon />
                            </IconButton>
                        </Tooltip>
                    </Collapse>
                </Box>
            </Box>
            <Collapse in={showItems}>
                {items.map((item) => (
                    <Typography key={Math.random(1000)} style={{ marginLeft: "4ch" }}>
                        <span key={Math.random(1000) + ''} onClick={(e) => e.stopPropagation()}>
                            ${item.price.toFixed(2)} {item.name}
                        </span>
                    </Typography>
                ))}
            </Collapse>
        </Paper>
    );
}

export default function OrderStatus() {
    const navigate = useNavigate();

    const [{ user }, dispatch ] = useStateValue()  
    const [activeOrders, setActiveOrders] = useState()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        const listOrdersBy = async () => {
            try {
                const response_promise = API.graphql(graphqlOperation(listOrders, {filter: {orderStatus: {eq: 'received'}, userID: {eq: user.attributes.sub}}}))
                const response = await response_promise
                console.log(response)
                setActiveOrders(response.data.listOrders.items)
                setIsLoading(false)
            } catch (err) {
                console.log(err)
            }
        }
        listOrdersBy()

        
    }, [])

    console.log(activeOrders)

    return (
        <Box>
            <h1>Orders</h1>
            {!isLoading ? activeOrders.map((order) => (
                <OrderItem
                    key={Math.random(1000)}
                    orderItem={order}
                    
                    style={{
                        marginBottom: "1em",
                        textAlign: "left",
                        padding: "1ch",
                    }}
                />
            )) : null}
            <Button variant="outlined" onClick={() => navigate("/")}>
                Back to Menu
            </Button>
        </Box>
    );
}
