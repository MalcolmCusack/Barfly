import { Button, ButtonGroup} from '@mui/material';
import { useStateValue } from '../../state/StateProvider';
import OrderItem from './OrderItem';
import {getOrderTotal} from '../../state/reducer'
import { useNavigate } from 'react-router-dom';


const OrderSummary = () => {

    const [{order}, dispatch] = useStateValue()

    const navigator = useNavigate();

    function navigate(destination) {
        navigator(destination)
    }

    return (
        <div>
            <h2>Summary</h2>
            <div>
                {order.map(item => {
                    return <OrderItem key={item.id} item={item} />
                })}
            </div>

            <h4 >Order Total: ${getOrderTotal(order).toFixed(2)}</h4>
        
            <ButtonGroup style={{ padding: '15px'}} disableElevation variant='outlined'>
                <Button  className='buttons' style={{backgroundColor:'#292929'}} onClick={() => navigate('/')}>Back to Menu</Button>
                <Button  className='buttons' variant='contained' onClick={() => navigate('/payment')} 
                disabled={order.length === 0}>
                Checkout (${getOrderTotal(order).toFixed(2)})
                </Button>
            </ButtonGroup>

            

            
            

        </div>
        
    )
}

export default OrderSummary
