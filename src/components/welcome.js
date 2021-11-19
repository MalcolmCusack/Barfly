import React, {useContext} from 'react'
import { SignInContext } from '../contex/signInContext';
import Amplify, {Auth}  from 'aws-amplify'
import { Button } from '@mui/material'
import logoWhite from '../BarflyLogoWhite.png';
import {useNavigate} from 'react-router-dom';

const Welcome = ({onSignOut}) => {

    const navigate = useNavigate();

    const { user } = useContext(SignInContext)

    const signOut = async () => {
        try {
          await Auth.signOut();
          onSignOut();
          navigate('/')
    
        } catch (err) {
          console.log(err)
        }
    }

    return (
        <div>
            <img src={logoWhite} className="App-logo" alt="logo" />
                  <p>
                      Barfly
                  </p>
                  
                  <Button onClick={signOut} variant='contained'>Log Out</Button>
        </div>
    )
}

export default Welcome
