import { useState } from "react";
import { Button, ButtonGroup, TextField, Box, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getOrderTotal } from "../../state/reducer";
import { useStateValue } from "../../state/StateProvider";
import { API, graphqlOperation } from "aws-amplify";
import { createOrder } from "../../graphql/mutations";
//import CreditCardIcon from '@mui/icons-material/CreditCard';
import {
    useStripe,
    useElements,
    CardCvcElement,
    CardNumberElement,
    CardExpiryElement
} from "@stripe/react-stripe-js";
import StripeInput from './StripeInput'
import axios from "axios";

function Payment() {
    const [{ order, user }, dispatch] = useStateValue();
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    
    const stripe = useStripe();
    const elements = useElements();

    const navigator = useNavigate();

    function navigate(destination) {
        navigator(destination);
    }

    const handleSubmit = async (event) => {
        setLoading(true);

       const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardCvcElement),
      });
  
    if (error) {
        //console.log(error.message);
        setMessage("Payment was unsuccessful !");
      } else {
        
        //console.log(" token generated!", paymentMethod);
         try {
            const { id } = paymentMethod;
            const response = await axios.post(
            "https://rocky-beach-86430.herokuapp.com/stripe/charge",
            {
                amount: getOrderTotal(order).toFixed(2)*100,
                id: id,
            }
            );

            console.log("Stripe 35 | data", response.data.success);
            if (response.data.success) {
                //console.log("payment successful!");
                const payload = {
                    items: JSON.stringify(order),
                    completed: false,
                    userID: user.attributes.sub,
                    orderStatus: 'received'
                };
        
                try {
                    //event.preventDefault();
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

                    //orderSubscription.unsubscribe();

                } catch (err) {
                    console.log(err);
                }
            }
            else{
                setMessage("Payment was unsuccessful !");
            }
        } catch (error) {
            console.log(error);
            setMessage("Payment was unsuccessful !");
        }        
    }
    setLoading(false);    
        
    };

    return (
        <div>
            <h2>Payment</h2>
          
            
            <div style={{ width: "35%",minWidth: "200px", margin: "auto", marginTop: "50px" }}>     
                <TextField
                    label="Credit Card Number"
                    name="ccnumber"
                    variant="outlined"
                    fullWidth
                    style={{ 
                        backgroundColor:'#292929'
                    }}
                    InputProps={{
                        inputComponent: StripeInput,
                        inputProps: {
                            component: CardNumberElement
                        },
                    }}
                    InputLabelProps={{ shrink: true }}
                />
            </div>
            <div style={{ width: "35%", minWidth: "200px",margin: "auto", marginTop: "20px", marginBottom: "20px", display: "flex" }}>
                <TextField 
                    label="Expiration Date"
                    name="ccexp"
                    variant="outlined"
                    required
                    fullWidth
                    style={{ 
                        backgroundColor:'#292929'
                    }}
                    InputProps={{
                        inputProps: {
                           component: CardExpiryElement
                        },
                        inputComponent: StripeInput                      
                    }}
                    InputLabelProps={{ shrink: true }}
                ></TextField>
                <TextField
                    style={{ width: "100px" }}
                    label="CVC"
                    name="cvc"
                    variant="outlined"
                    required
                    fullWidth
                    style={{ 
                        backgroundColor:'#292929'
                    }}
                    InputProps={{
                        inputProps: {
                           component: CardCvcElement
                        },
                        inputComponent: StripeInput
                    }}
                    InputLabelProps={{ shrink: true }}
                ></TextField>
            </div>
            <h4>Order Total: ${getOrderTotal(order).toFixed(2)}</h4>     
            <ButtonGroup>
                <Button
                    className='buttons'
                    variant="outlined"
                    onClick={() => navigate("/ordersummary")}
                    style={{ 
                        backgroundColor:'#292929'
                    }}
                >
                    Back to Summary
                </Button>
                <Button 
                    className='buttons'
                    variant="contained" 
                    disabled={loading}
                    onClick={handleSubmit}>
                    {
                        loading
                        ?
                        <CircularProgress size={24} />
                        :
                        'Place Order'
                    }     
                </Button>
            </ButtonGroup>
            <Box height="2em" style={{marginTop:'20px'}}>{message}</Box>
        </div>
    );
}

export default Payment;
