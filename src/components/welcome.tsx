import React, {useContext} from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { Button } from '@mui/material';
import logoWhite from '../BarflyLogoWhite.png';
import {useNavigate} from 'react-router-dom';
import { useStateValue } from '../state/StateProvider';
import {getMenu} from '../graphql/queries'

const Welcome = ({onSignOut}:{onSignOut:() => {}}) => {

    const [state] = useStateValue();

    console.log(state.user.username)

    const allMenu =  API.graphql({ query: getMenu, variables: {id: 'f22508f7-a1c0-423e-a4cd-c5c066538efb'}});

    console.log(allMenu)

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
