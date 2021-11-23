import { Button } from '@mui/material';
import React from 'react';
import { useStateValue } from '../../state/StateProvider';
import OrderItem from './OrderItem';
import {getOrderTotal} from '../../state/reducer'
import { useNavigate } from 'react-router-dom';


const OrderSummary = () => {

    const [{order}, dispatch] = useStateValue()

    const navigator = useNavigate()

    function navigate(destination) {
        navigator(destination)
    }

    console.log(order)
    return (
        <div>
            <div>
            {order.map(item => {
                console.log(item)
                return <OrderItem key={item.id} item={item} />
            })}
            </div>

            <h2>Order Total: {getOrderTotal(order)}</h2>
        

            <Button onClick={() => navigate('/')}>Back to Menu</Button>
            <Button onClick={() => navigate('/payment')}>Checkout</Button>

        </div>
        
    )
}

export default OrderSummary
