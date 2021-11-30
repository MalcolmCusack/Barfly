import { useContext, useEffect, useState } from "react";
import { onUpdateOrder } from "../../graphql/subscriptions";
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
import { NavigateContext } from "../../App";
import { useTimeout } from "../../hooks/timing";
import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";
import CancelIcon from "@mui/icons-material/Cancel";

//@ts-ignore
window.tq = async (input, condition) => {
    return await API.graphql(
        graphqlOperation(updateOrder, { input, condition })
    );
};

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
                    <Typography style={{ marginLeft: "4ch" }}>
                        <span onClick={(e) => e.stopPropagation()}>
                            ${item.price.toFixed(2)} {item.name}
                        </span>
                    </Typography>
                ))}
            </Collapse>
        </Paper>
    );
}

export default function OrderStatus() {
    const navigate = useContext(NavigateContext);
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
