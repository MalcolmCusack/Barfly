/* This component displays a user's order history 
by different categories of 'status'. */

import { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import {
    Button,
    Collapse,
    IconButton,
    Paper,
    Tooltip,
    Typography,
    ButtonGroup,
} from "@mui/material";
import { Box } from "@mui/system";
import { useTimeout } from "../../hooks/timing";
import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";
import CancelIcon from "@mui/icons-material/Cancel";
import { useNavigate } from "react-router";
import { onOrderByUserId } from "../../graphql/subscriptions";
import { useStateValue } from "../../state/StateProvider";
import { listOrders } from "../../graphql/queries";
import _ from "lodash";
import DisplayProfileImg from "../../Settings/DisplayProfileImg";

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
    const [showItems, setShowItems] = useState(false);
    const [showCancel, setShowCancel] = useState(false);
    const timeout = useTimeout();

    const [order, setOrder] = useState(orderItem);
    const [items] = useState(JSON.parse(orderItem.items));

    function openCancel() {
        try {
            setShowCancel(true);
        } finally {
            timeout(() => setShowCancel(false), 3000);
        }
    }

    const getTime = () => {
        const orderDate = new Date(order.createdAt);
        const time = orderDate.getMonth() + 1 + '/' +  orderDate.getDate() + '/' + orderDate.getFullYear();
        return time
    }

    //const [{ user }] = useStateValue();

    // useEffect(() => {
    //     const subscribe = async () => {
    //         const userSub = API.graphql({
    //             query: onOrderByUserId,
    //             variables: {
    //                 userID: user.attributes.sub,
    //             },
    //         }).subscribe({
    //             next: (orderData) => {
    //                 const mutatedOrder = orderData.value.data.onOrderByUserId;
    //                 if (
    //                     typeof mutatedOrder !== undefined &&
    //                     typeof order !== undefined
    //                 ) {
    //                     if (order.id === mutatedOrder.id) {
    //                         setOrder({
    //                             ...order,
    //                             orderStatus: mutatedOrder.orderStatus,
    //                         });
    //                     }
    //                 }
    //             },
    //         });

    //         const userSubResponse = await userSub;

    //         return userSubResponse;
    //     };
    //     return subscribe();
    // }, [order, user.attributes.sub]);

    return (
        <Paper onClick={() => setShowItems((show) => !show)} style={style}>
            <Box display="flex" flexDirection="row">
                <Box display="flex" flexDirection="column">
                <Typography>
                    $
                    {items
                        .reduce((total, item) => total + item.price, 0.0)
                        .toFixed(2)}
                    {" - "}
                    {items.length} item
                    {items.length !== 1 && "s"}
                    {" on "}
                    {getTime()}
                </Typography>
                
                <Typography>
                     Order code : {order.id.substring(0,5)}
                </Typography>
                </Box>

                <Box position="relative" bottom="1ch" flexGrow="1">
                    <Collapse
                        in={!showCancel}
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
                        in={showCancel}
                        style={{ position: "absolute", right: "1ch" }}
                    >
                        <Tooltip
                            title="Tap Again to Cancel"
                            open={showCancel}
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
                {items.map((item) => (
                    <Typography
                        key={Math.random(1000)}
                        style={{ marginLeft: "4ch" }}
                    >
                        <span
                            key={Math.random(1000) + ""}
                            onClick={(e) => e.stopPropagation()}
                        >
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
    const [status, setStatus] = useState("received");
    const [{ user, currentBar }] = useStateValue();
    const [activeOrders, setActiveOrders] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [empty, setEmpty] = useState(false);

    useEffect(() => {
        const listOrdersBy = async () => {
            try {
                const response_promise = API.graphql(
                    graphqlOperation(listOrders, {
                        filter: {
                            orderStatus: { eq: status },
                            userID: { eq: user.attributes.sub },
                        },
                    })
                );
                const response = await response_promise;
                setActiveOrders(_.orderBy(response.data.listOrders.items, (item) => {
                    return item.createdAt
                },'desc'));
                setIsLoading(false);

                if (response.data.listOrders.items.length === 0) {
                    setEmpty(true);
                } else {
                    setEmpty(false);
                }

                console.debug(response);
            } catch (err) {
                console.debug(err);
            }
        };
        return listOrdersBy();
    }, [user.attributes.sub, status]);

    return (
        <Box>
            <h2>Orders</h2>
            <div>
                <DisplayProfileImg size='5em'/>
            </div>
            <ButtonGroup
                style={{ padding: "15px", width: "100%" }}
                disableElevation
                variant="outlined"
            >
                <Button
                    className={status === "received" ? "activeTab" : "tab"}
                    onClick={() => setStatus("received")}
                >
                    Recieved
                </Button>
                <Button
                    className={status === "in-progress" ? "activeTab" : "tab"}
                    onClick={() => setStatus("in-progress")}
                >
                    In-Progress
                </Button>
                <Button
                    className={status === "complete" ? "activeTab" : "tab"}
                    onClick={() => setStatus("complete")}
                >
                    Completed
                </Button>
            </ButtonGroup>

            {!isLoading && !empty ? (
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
                <h2>No items are {status} yet.</h2>
            )}
            <Button
                variant="outlined"
                style={{ backgroundColor: "#292929" }}
                onClick={() => navigate(`/${currentBar.id}/menu`)}
            >
                Back to Menu
            </Button>
        </Box>
    );
}
