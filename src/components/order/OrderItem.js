import { Button, IconButton, Typography } from '@mui/material';
import { useStateValue } from '../../state/StateProvider';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import RemoveCircleOutlinedIcon from '@mui/icons-material/RemoveCircleOutlined';

function OrderItem({ item, count }) {

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
        <div style={{
            display: 'flex', justifyContent: 'space-between', padding: '15px', 
            backgroundColor:'#121212',
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))',
            marginBottom:'10px',
            display: 'flex',
            justifyContent: 'space-between',
            borderRadius:'9px'}}           
            >
            
            <div>
                <h3 style={{margin: '10px'}}>{item.name}</h3>
                <h5 class='numbers' >${item.price.toFixed(2)}</h5>
            </div>

            <div style={{display: 'flex', justifyContent: 'space-between', maxWidth: '200px', width:'40%', 
                  backgroundColor:'rgb(41, 41, 41)', borderRadius: '40px'}}>
                
                <IconButton variant="outlined" onClick={addToOrder}><AddCircleOutlinedIcon style={{fontSize:'30px'}} color="primary"/></IconButton>
                 <Typography style={{fontSize:'1.3em', paddingTop:'13px'}}>{count}</Typography>
                <IconButton variant="outlined" onClick={removeFromOrder}><RemoveCircleOutlinedIcon style={{fontSize:'30px'}} color="primary"/></IconButton>
            </div>
            

        </div>
    )
}

export default OrderItem