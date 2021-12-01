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
import { onOrderByUserId } from "../../graphql/subscriptions";
import { useStateValue } from "../../state/StateProvider";
import { listOrders } from "../../graphql/queries";
import LoadingIndicator from "../LoadingIndicator";
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
    const [showItems, setShowItems] = useState(true);
    const [showConfirmCancel, setShowConfirmCancel] = useState(false);
    const timeout = useTimeout();

    const [order, setOrder] = useState(orderItem);
    const [items, setItems] = useState(JSON.parse(orderItem.items));

    function openCancel() {
        try {
            setShowConfirmCancel(true);
        } finally {
            timeout(() => setShowConfirmCancel(false), 3000);
        }
    }

    const [{ user }, dispatch] = useStateValue();

    useEffect(() => {
        const subscribe = async () => {
            const userSub = API.graphql({
                query: onOrderByUserId,
                variables: {
                    userID: user.attributes.sub,
                },
            }).subscribe({
                next: (orderData) => {
                    const mutatedOrder = orderData.value.data.onOrderByUserId;
                    if (
                        typeof mutatedOrder !== undefined &&
                        typeof order !== undefined
                    ) {
                        if (order.id === mutatedOrder.id) {
                            setOrder({
                                ...order,
                                orderStatus: mutatedOrder.orderStatus,
                            });
                        }
                    }
                },
            });

            //const userSubResponse = await userSub

            //console.log(userSubResponse)
        };
        subscribe();
    }, []);

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
                        in={!showConfirmCancel}
                        style={{ position: "absolute", right: "1ch" }}
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
                        in={showConfirmCancel}
                        style={{ position: "absolute", right: "1ch" }}
                    >
                        <Tooltip
                            title="Tap Again to Cancel"
                            open={showConfirmCancel}
                            placement="left"
                        >
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
                <div onClick={(e) => e.stopPropagation()} style={{display:"inline-block", marginLeft: "4ch"}}>
                    {items.map((item, index) => (
                        <Typography
                            key={index}
                        >
                            <span key={Math.random(1000) + ""}>
                                ${item.price.toFixed(2)} {item.name}
                            </span>
                        </Typography>
                    ))}
                </div>
            </Collapse>
        </Paper>
    );
}

export default function OrderStatus() {
    const navigate = useNavigate();

    const [{ user }, dispatch] = useStateValue();
    const [activeOrders, setActiveOrders] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const listOrdersBy = async () => {
            try {
                const response_promise = API.graphql(
                    graphqlOperation(listOrders, {
                        filter: {
                            orderStatus: { eq: "received" },
                            userID: { eq: user.attributes.sub },
                        },
                    })
                );
                const response = await response_promise;
                //console.log(response)
                setActiveOrders(response.data.listOrders.items);
                setIsLoading(false);
            } catch (err) {
                console.log(err);
            }
        };
        listOrdersBy();
    }, []);

    //console.log(activeOrders)

    return (
        <Box>
            <h1>Orders</h1>
            {!isLoading ? (
                activeOrders.map((order) => (
                    <OrderItem
                        key={Math.random(1000)}
                        orderItem={order}
                        style={{
                            marginBottom: "1em",
                            textAlign: "left",
                            padding: "1ch",
                        }}
                    />
                ))
            ) : (
                <Box marginBottom="1em">
                    <LoadingIndicator size="3ch" />
                </Box>
            )}
            <Button variant="outlined" onClick={() => navigate("/")}>
                Back to Menu
            </Button>
        </Box>
    );
}
