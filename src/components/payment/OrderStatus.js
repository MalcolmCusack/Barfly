import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import { useStateValue } from '../../state/StateProvider'
import { API, graphqlOperation } from "aws-amplify";

const OrderStatus = () => {

    const [{ order, user }, dispatch ] = useStateValue()

    const navigator = useNavigate()

    function navigate(destination) {
        navigator(destination)
    }

    /*function subscribe() {
        API.graphql(graphqlOperation(onOrderComplete)
        ).subscribe({
            next: (orderData) => {
                console.log("orderData: ", orderData)
                updateTest(orderData)
            }
        })
    }

    useEffect(() => {
        subscribe()
    
    }, [])*/

    return (
        <div>
            <h2>Your order has been Recieved!</h2>
    
            <Button variant="outlined" onClick={() => navigate("/")} >Back To Menu</Button>
        </div>
    )
}

export default OrderStatus
