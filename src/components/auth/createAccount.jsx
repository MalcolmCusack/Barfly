import React, {useState} from 'react';
import logoWhite from '../../BarflyLogoWhite.png';
import Amplify, {Auth } from 'aws-amplify';
import {Link, useNavigate} from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const CreateAccount = (onCreateAccount) => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [phone, setPhone] = useState();
    const [age, setAge] = useState();

    const navigate = useNavigate()

    const createAccount = async () => {
        try {

          navigate('/confirmAccount');
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
            <TextField value={phone} onChange={e => setPhone(e.target.value)} label='phone' varient='outlined' type='phone' required/>
            <TextField value={age} onChange={(e) => setAge(e.target.value)} label='age' required/>
            
            <Button variant='contained' onClick={createAccount}>Log In</Button>
            <span>Have an account? <Link to='/signin'>Sign In</Link></span>
        </div>
    )
}

export default CreateAccount
