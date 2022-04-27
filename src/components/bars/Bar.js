/* This component displays a single bar and
the option to select it. */

import { useStateValue } from '../../state/StateProvider';

function Bar({ bar }) {
    const [ {currentBar}, dispatch] = useStateValue();

    const barImgUrl = JSON.parse(bar.profileImg)

    return (
        <div style={{
            display: 'flex', 
            justifyContent: 'space-between', 
            flexDirection: 'column',
            alignItems: 'center',
            padding: '5px',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto',
            backgroundColor:'#121212',
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))',
            marginBottom:'10px',
            borderRadius:'9px'}}           
            >
            
            <div>
                <h2 style={{margin: '10px', fontFamily: 'Tahoma', textAlign: 'center'}}>{bar.name}</h2>
                {barImgUrl && <img  style={{ height: 'auto', width: '12em', borderRadius:'9px'}} alt="" src={barImgUrl.img}/>}
                
                <h2 class="bio" >{bar.bio}</h2>
            </div>
        </div>
    )
}

export default Bar
