/* This component displays a single bar and
the option to select it. */

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
        navigate(`/${bar.id}/menu`)
    }

    const barImgUrl = JSON.parse(bar.profileImg)

    return (
        <div style={{
            display: 'flex', 
            justifyContent: 'space-between', 
            flexDirection: 'column',
            alignItems: 'center',
            padding: '15px', 
            backgroundColor:'#121212',
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))',
            marginBottom:'10px',
            borderRadius:'9px'}}           
            >
            
            <div>
                <h2 style={{margin: '10px', fontFamily: 'Arial Black', textAlign: 'center'}}>{bar.name}</h2>
                {barImgUrl && <img  style={{ height: 'auto', width: '10em'}} alt="" src={barImgUrl.img}/>}
                
                <h4 >{bar.bio}</h4>
            </div>

            <Button variant="outlined" onClick={goToMenu}>Select Bar</Button>
            
            

        </div>
    )
}

export default Bar