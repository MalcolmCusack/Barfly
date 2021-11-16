import React, {useState} from 'react';
import logoWhite from '../../BarflyLogoWhite.png';
import Amplify, {Auth } from 'aws-amplify';
import {Link, useNavigate} from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



const SignIn = ({ onSignIn }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const navigate = useNavigate();

    const signIn = async () => {
        try {
          await Auth.signIn(email, password);
          navigate('/');
          onSignIn()
        } catch (err) {
          console.log(err)
        }
      }


    return (
        <div>
            <h1>Welcome To Barfly</h1>
            <img src={logoWhite} className="App-logo" alt="logo" />
            
            <h2>Log in</h2>
            <TextField value={email} onChange={e => setEmail(e.target.value)} label="email" variant="outlined" required/>
            <TextField value={password} onChange={e => setPassword(e.target.value)} label="password" variant="outlined" type="password" required/>
            <Button variant='contained' onClick={signIn}>Log In</Button> 


        </div>
    )
}

export default SignIn
