import { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import {
    Button,
} from "@mui/material";
import { Box } from "@mui/system";

import { useNavigate } from "react-router";
import { useStateValue } from "../../state/StateProvider";
import { listOrders } from "../../graphql/queries";
import LoadingIndicator from "../LoadingIndicator";
import OrderStatusItem from "./OrderStatusItem";
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

                console.log('response: ', response.data.listOrders.items)
                console.log('activeOrders: ', activeOrders)
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
                    <OrderStatusItem
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
