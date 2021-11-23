import { Button } from '@mui/material';
import React from 'react';
import {useNavigate} from 'react-router-dom';
import { getOrderTotal } from '../../state/reducer';
import { useStateValue } from '../../state/StateProvider';
import { API, graphqlOperation } from "aws-amplify";
import { createOrder } from '../../graphql/mutations';
//import {listOrders} from '../../graphql/queries';


function Payment() {

    const [{ order, user }, dispatch ] = useStateValue()

    const navigator = useNavigate()

    function navigate(destination) {
        navigator(destination)
    }

    console.log(order)
    console.log(user)

    const handleSubmit = async (event) => {
        event.preventDefault()

        const payload = {
            
        items: JSON.stringify(order),
        completed: false,
        userID: user.attributes.sub,
        }

        try {
            const response = await API.graphql(graphqlOperation(createOrder, {input: payload}))
            //const responseBeer = await API.graphql(graphqlOperation(listBeers))
            console.log(response.data)

            
            
            
        } catch (err) {
            console.log(err)
        }

        dispatch({
            type: 'EMPTY_BASKET'
        })

        navigate('/orderstatus')
    }


    return (
        <div>
            <h1>Payment</h1>
            <h2>Order Total: {getOrderTotal(order)}</h2>

            <Button variant="outlined" onClick={handleSubmit}>Place Order</Button>
            <Button variant="outlined" onClick={() => navigate('/ordersummary')}>Back to Summary</Button>
        </div>
    )
}

export default Payment
