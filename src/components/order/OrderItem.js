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

    const addToOrder = () => {
        dispatch({
            type: "ADD_TO_ORDER",
            item: {
                id: item.id,
                name: item.name,
                price: item.price,
            },
        })
    }

    return (
        <div style={{display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #fcba03', padding: '15px'}}>
            
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <h2 style={{margin: '10px'}}>{item.name}</h2>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <Button variant="outlined" onClick={addToOrder}>+</Button>
                    <Button variant="outlined" onClick={removeFromOrder}>-</Button>
                </div>
            </div>
            
            <h3>$ {item.price.toFixed(2)}</h3>

        </div>
    )
}

export default OrderItem