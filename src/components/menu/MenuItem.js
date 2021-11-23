import { Button } from "@mui/material"
import { useSnackbar } from "notistack";
import { useStateValue } from "../../state/StateProvider"



const MenuItem = ({item}) => {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

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

        enqueueSnackbar(`${item.name} Added To Order`, {autoHideDuration: 1000})
    };

    return (
        <div>
            <h3>{item.name}</h3>
            <h4>{item.price}</h4>
            <Button variant="contained" onClick={addToOrder}>Add To Order</Button>
        </div>
    )
}

export default MenuItem
