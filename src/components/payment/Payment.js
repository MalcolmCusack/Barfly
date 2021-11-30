import { Button, ButtonGroup, TextField } from "@mui/material";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { getOrderTotal } from "../../state/reducer";
import { useStateValue } from "../../state/StateProvider";
import { API, graphqlOperation } from "aws-amplify";
import { createOrder } from "../../graphql/mutations";
import { onCreateOrder } from "../../graphql/subscriptions";
import { getUser } from "../../graphql/queries";
import { NavigateContext } from "../../App";

//import {listOrders} from '../../graphql/queries';

function Payment() {
    const [{ order, user }, dispatch] = useStateValue();

    const navigator = useContext(NavigateContext);

    function navigate(destination) {
        navigator(destination);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        let orderId = "";
        const payload = {
            items: JSON.stringify(order),
            completed: false,
            userID: user.attributes.sub,
        };

        try {
            const response = await API.graphql(
                graphqlOperation(createOrder, { input: payload })
            );
            //const responseBeer = await API.graphql(graphqlOperation(listBeers))
            console.log(response);
            orderId = response.data.createOrder.id;
        } catch (err) {
            console.log(err);
        }

        //orderSubscription.unsubscribe();

        dispatch({
            type: "EMPTY_ORDER",
        });

        navigate("/paymentsuccess");
    };

    return (
        <div>
            <h1>Payment</h1>
            <h2>Order Total: $ {getOrderTotal(order).toFixed(2)}</h2>

            <TextField
                margin="normal"
                variant="outlined"
                placeholder="card number"
            ></TextField>
            <div style={{ margin: "20px" }}>
                <TextField variant="outlined" placeholder="mm/yyyy"></TextField>
                <TextField
                    style={{ width: "100px" }}
                    variant="outlined"
                    placeholder="cvv"
                ></TextField>
            </div>

            <ButtonGroup>
                <Button
                    variant="outlined"
                    onClick={() => navigate("/ordersummary")}
                >
                    Back to Summary
                </Button>
                <Button variant="contained" onClick={handleSubmit}>
                    Place Order
                </Button>
            </ButtonGroup>
        </div>
    );
}

export default Payment;
