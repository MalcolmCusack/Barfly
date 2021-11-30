import React, {useContext, useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from '@mui/material'
import { useStateValue } from '../../state/StateProvider'
import { API, graphqlOperation } from "aws-amplify";
import { onOrderByUserId, onOrderByOrderId} from '../../graphql/subscriptions';
import { Yard } from '@mui/icons-material';
import { NavigateContext } from '../../App';

const OrderStatus = () => {

    const [{ order, user }, dispatch ] = useStateValue()
    const [test, updateTest] = useState()
    
    const params = useParams();

    console.log(params)

    const navigator = useNavigate();

    function navigate(destination) {
        navigator(destination)
    }



    useEffect(() => {

        const subscribe = async () => {

            /*const userSub = API.graphql({
                query: onOrderByUserId, 
                variables: {
                    userID: user.attributes.sub,
            }})
            .subscribe({
                next: (orderData) => {
                    console.log("userSubdata: ", orderData)
                    const order = JSON.parse(orderData.value.data.onOrderByUserId.items)
                    console.log(order)
                    updateTest(order)
                }
            })
            const userSubResponse = await userSub
            console.log(userSubResponse)*/

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
            console.log(userOrderR)
        }
        subscribe()
    
    }, [])

    return (
        <div>
            <h2>Your order has been Recieved!</h2>
    
            <Button variant="outlined" onClick={() => navigate("/")} >Back To Menu</Button>
        </div>
    )
}

export default OrderStatus
