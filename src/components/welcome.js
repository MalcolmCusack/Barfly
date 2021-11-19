import React, {useContext} from 'react'
import { SignInContext } from '../contex/signInContext';
import Amplify  from 'aws-amplify'
import { Button } from '@mui/material'
import logoWhite from '../BarflyLogoWhite.png';
import {useNavigate} from 'react-router-dom';
import { useStateValue } from '../state/StateProvider';

const Welcome = ({onSignOut}) => {

    const [state] = useStateValue();

    console.log(state.user.username)

    return (
        <div>
            <img src={logoWhite} className="App-logo" alt="logo" />
                  <p>
                      Hello, {state.user.username}
                  </p>
                  
                  <Button onClick={onSignOut} variant='contained'>Log Out</Button>
        </div>
    )
}

export default Welcome
