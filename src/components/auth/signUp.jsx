import React, {useState} from 'react';
import logoWhite from '../../BarflyLogoWhite.png';
import Amplify, {Auth } from 'aws-amplify';
import {Link, useNavigate} from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';

const SignUp = ( {onCreateAccount}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const [phone, setPhone] = useState('');
    const [age, setAge] = useState('');
    const [name, setName] = useState('');

    const navigate = useNavigate()

    const createAccount = async () => {
        try {
          Auth.signUp(name, password, email)
          onCreateAccount(name)
          navigate('/confirmSignUp');
        } catch (err) {
          console.log(err)
        }
      }

    return (
        <div>
            <h1>Welcome To Barfly</h1>
            <img src={logoWhite} className="App-logo" alt="logo" />
            
            <h2>Log in</h2>
            <TextField value={name} onChange={e => setName(e.target.value)} label='name' varient='outlined' type='text' required/>
            <TextField value={email} onChange={e => setEmail(e.target.value)} label="email" variant="outlined" required/>
            <TextField value={password} onChange={e => setPassword(e.target.value)} label="password" variant="outlined" type="password" required/>
            
            <TextField value={phone} onChange={e => setPhone(e.target.value)} label='phone' varient='outlined' type='phone' required/>
            <TextField value={age} onChange={(e) => setAge(e.target.value)} label='age'  type='number' required/>
            
            <Button variant='contained' onClick={createAccount}>Sign Up!</Button>
            <span>Have an account? <Link to='/'>Sign In</Link></span>
        </div>
    )
}

export default SignUp
