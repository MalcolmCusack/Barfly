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
        <div style={{borderBottom: '1px solid #fcba03', paddingBottom: '20px'}}>
            <h3>{item.name}</h3>
            <h4>$ {item.price.toFixed(2)}</h4>
            <Button size='small' variant="contained" onClick={addToOrder}>Add To Order</Button>
        </div>
    )
}

export default MenuItem
