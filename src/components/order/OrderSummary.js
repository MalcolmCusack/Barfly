import { Button, ButtonGroup} from '@mui/material';
import React, { useContext } from 'react';
import { useStateValue } from '../../state/StateProvider';
import OrderItem from './OrderItem';
import {getOrderTotal} from '../../state/reducer'
import { useNavigate } from 'react-router-dom';
import { NavigateContext } from '../../App';


const OrderSummary = () => {

    const [{order}, dispatch] = useStateValue()

    const navigator = useContext(NavigateContext);

    function navigate(destination) {
        navigator(destination)
    }

    return (
        <div>

            <h2>Order Total: $ {getOrderTotal(order).toFixed(2)}</h2>
        
            <ButtonGroup style={{borderBottom: '1px solid #fcba03', padding: '15px'}} disableElevation variant='outlined'>
                <Button  onClick={() => navigate('/')}>Back to Menu</Button>
                <Button  variant='contained' onClick={() => navigate('/payment')}>Checkout</Button>
            </ButtonGroup>

            <div>
            {order.map(item => {
                return <OrderItem key={item.id} item={item} />
            })}
            </div>

            
            

        </div>
        
    )
}

export default OrderSummary
