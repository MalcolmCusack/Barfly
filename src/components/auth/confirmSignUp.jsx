import React , {useState} from 'react';
import {Auth} from 'aws-amplify';
import { TextField, Button} from '@mui/material';
import { Link, useNavigate} from 'react-router-dom';
import logoWhite from '../../BarflyLogoWhite.png';


const ConfirmSignUp = ({username}) => {

    const navigate = useNavigate()

    const [code, setCode] = useState('')

    async function confirmSignUp() {
        try {
          await Auth.confirmSignUp(username, code);
          navigate('/')
        } catch (error) {
            console.log('error confirming sign up', error);
        }
    }

    return (
        <div>
            <h1>Please Enter Confirmation Code From Email</h1>
            <img src={logoWhite} className="App-logo" alt="logo" />
            <TextField value={username} label="name" variant='outlined' disabled />
            <TextField value={code} onChange={e => setCode(e.target.value)} label='code' varient='outlined' type='text' required/>
            <Link to='/'>Back To Sign In</Link>
            <Button variant='contained' onClick={confirmSignUp}>CONFIRM</Button>
        </div>
    )
}

export default ConfirmSignUp
