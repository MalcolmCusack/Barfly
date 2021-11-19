import React, {useState} from 'react';
import logoWhite from '../../BarflyLogoWhite.png';
import { Auth } from 'aws-amplify';
import {Link, useNavigate} from 'react-router-dom';
import { useTheme } from '@material-ui/core/styles'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../../styles/auth.css';



const SignIn = () => {

    const theme = useTheme();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const navigate = useNavigate();

    const signIn = async (event) => {
        //event.preventDefault()

        try {
          await Auth.signIn(email, password);
          console.log('hit')
          //onSignIn()
          navigate('/');
        } catch (err) {
          console.log(err)
        }
      }

    
    //const handlePassReset()


    return (
        <div>
            <h1>Sign In To Barfly!</h1>
            <img src={logoWhite} className="App-logo" alt="logo" />
            
            <h2>Sign In</h2>
            <TextField value={email} onChange={e => setEmail(e.target.value)} label="email" variant="outlined" required/>
            <TextField value={password} onChange={e => setPassword(e.target.value)} label="password" variant="outlined" type="password" required/>
            <span>Forgot your password? <Link to='/forgotpass'>Reset Password</Link></span>
            <Button  variant='contained' onClick={signIn}>Sign In</Button>
            <span>No account?<Link to='/signup'>Create a Barfly Account</Link></span>


        </div>
    )
}

export default SignIn
