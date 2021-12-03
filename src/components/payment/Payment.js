import { Button, ButtonGroup, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getOrderTotal } from "../../state/reducer";
import { useStateValue } from "../../state/StateProvider";
import { API, graphqlOperation } from "aws-amplify";
import { createOrder } from "../../graphql/mutations";

function Payment() {
    const [{ order, user }, dispatch] = useStateValue();

    const navigator = useNavigate();

    function navigate(destination) {
        navigator(destination);
    }

    const handleSubmit = async (event) => {
        //event.preventDefault();

        const payload = {
            items: JSON.stringify(order),
            completed: false,
            userID: user.attributes.sub,
            orderStatus: 'received'
        };

        try {
            const response = await API.graphql(
                graphqlOperation(createOrder, { input: payload })
            ).then((data) => {
                dispatch({
                    type: "EMPTY_ORDER",
                });
                //console.log("response, ", response)
                setTimeout( () => {
                    navigate("/paymentsuccess");
                }, [100])
                
                return data
            });
            console.log(response)
        } catch (err) {
            console.log(err);
        }
        
        //orderSubscription.unsubscribe();
        
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
