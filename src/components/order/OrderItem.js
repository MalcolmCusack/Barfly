import { Button } from '@mui/material'
import React from 'react'
import { useStateValue } from '../../state/StateProvider'

function OrderItem({ item }) {

    const [{order}, dispatch] = useStateValue()

    console.log(order)

    const removeFromOrder = () => {
        dispatch({
            type: "REMOVE_FROM_ORDER",
            id: item.id,
        })
    }

    return (
        <div>
            <h3>{item.name}</h3>
            <h4>{item.price}</h4>

            <Button variant="contained" onClick={removeFromOrder}>Remove From Order</Button>
            
        </div>
    )
}

export default OrderItem