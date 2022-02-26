import { Button } from '@mui/material';
import { useStateValue } from '../../state/StateProvider';
import { useNavigate } from "react-router";


function Bar({ bar }) {
    const [ {currentBar}, dispatch] = useStateValue();
    
    const navigate = useNavigate();

    const goToMenu = () => {
        dispatch({
            type: "SET_BAR",
            bar: bar,
        })
        navigate("./menu")
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
                <h3 style={{margin: '10px'}}>{bar.name}</h3>
                <h5 >{bar.bio}</h5>
            </div>

            <Button variant="outlined" onClick={goToMenu}>Select Bar</Button>
            
            

        </div>
    )
}

export default Bar