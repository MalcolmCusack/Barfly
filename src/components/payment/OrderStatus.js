import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import { useStateValue } from '../../state/StateProvider'

const OrderStatus = () => {

    const [{ order, user }, dispatch ] = useStateValue()

    const navigator = useNavigate()

    function navigate(destination) {
        navigator(destination)
    }
    return (
        <div>
            <h2>Your order has been Recieved!</h2>
            <Button onClick={() => navigate("/")} >Back To Menu</Button>
        </div>
    )
}

export default OrderStatus
