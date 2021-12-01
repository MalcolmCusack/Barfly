import { useEffect, useState } from "react";
import { updateOrder } from "../../graphql/mutations";
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
import { onOrderByUserId, onOrderByOrderId} from '../../graphql/subscriptions';
import { useStateValue } from "../../state/StateProvider";

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


//@ts-ignore
/*
window.tq = async (input, condition) => {
    return await API.graphql(
        graphqlOperation(updateOrder, { input, condition })
    );
};*/

function OrderItem({ order, style }) {
    const [showItems, setShowItems] = useState(false);
    const [showCancel, setShowCancel] = useState(false);
    const timeout = useTimeout();
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
                    console.log("userSubdata: ", orderData)
                    //const order = JSON.parse(orderData.value.data.onOrderByUserId.items)
                    console.log(order)
                    //updateTest(order)
                }
            })
            const userSubResponse = await userSub
            console.log(userSubResponse)
            
            /*
            // works, but mutation needs abunch all perevious values
            const userSubByID = API.graphql({
                query: onOrderByOrderId, 
                variables: {
                    id: params.orderid

            }})
            .subscribe({
                next: (data) => {
                    console.log("userSubdata: ", data)
                    //const orderr = JSON.parse(data.value.data)
                    //console.log(orderr)
                    //updateTest(orderr)
                }
            })
            const userOrderR = await userSubByID
            console.log(userOrderR)*/
        }
        subscribe()

    }, [])

    return (
        <Paper onClick={() => setShowItems((show) => !show)} style={style}>
            <Box display="flex" flexDirection="row">
                <Typography>
                    $
                    {order.items
                        .reduce((total, item) => total + item.price, 0.0)
                        .toFixed(2)}
                    {" - "}
                    {order.items.length} item
                    {order.items.length !== 1 && "s"}
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
                {order.items.map((item) => (
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
    const data = [
        {
            status: "open",
            items: [
                { name: "miller heaver", price: 3.29 },
                { name: "knuckle sandwich", price: 5.99 },
                { name: "can of whopass", price: 1.5 },
            ],
        },
        {
            status: "in progress",
            items: [{ name: "vodka shot", price: 7.69 }],
        },
    ];

    return (
        <Box>
            <h1>Orders</h1>
            {data.map((order) => (
                <OrderItem
                    key={Math.random(1000)}
                    order={order}
                    style={{
                        marginBottom: "1em",
                        textAlign: "left",
                        padding: "1ch",
                    }}
                />
            ))}
            <Button variant="outlined" onClick={() => navigate("/")}>
                Back to Menu
            </Button>
        </Box>
    );
}
