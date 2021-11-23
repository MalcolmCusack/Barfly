import { Button } from "@mui/material"
import { useStateValue } from "../../state/StateProvider"


const MenuItem = ({item}) => {

    const [{order}, dispatch] = useStateValue();

    console.log(order)

    const addToOrder = () => {
        dispatch({
            type: 'ADD_TO_ORDER',
            item: {
                id: item.id,
                name: item.name,
                price: item.price,
            }
        })
    };

    return (
        <div>
            <h3>{item.name}</h3>
            <h4>{item.price}</h4>
            <Button onClick={addToOrder}>Add To Order</Button>
        </div>
    )
}

export default MenuItem
