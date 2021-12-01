import { Button } from '@mui/material'
import { useStateValue } from '../../state/StateProvider'

function OrderItem({ item }) {

    const [{order}, dispatch] = useStateValue()

    const removeFromOrder = () => {
        dispatch({
            type: "REMOVE_FROM_ORDER",
            id: item.id,
        })
    }

    return (
        <div style={{borderBottom: '1px solid #fcba03', padding: '15px'}}>
            <h2 style={{margin: '10px'}}>{item.name}</h2>
            <h3>$ {item.price.toFixed(2)}</h3>
            
            <Button variant="outlined" onClick={removeFromOrder}>Remove From Order</Button>
            
        </div>
    )
}

export default OrderItem