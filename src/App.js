import logoWhite from './BarflyLogoWhite.png';
import './App.css';
import React, {useState, useEffect} from 'react'
import Amplify, {Auth, API, Storage, graphqlOperation } from 'aws-amplify'
import { withAuthenticator, AmplifyAuthContainer, AmplifyAuthenticator, AmplifySignOut, AmplifySignIn, AmplifySignUp, AmplifyForgotPassword } from '@aws-amplify/ui-react'
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import {listBeers} from './graphql'

// Back end push: amplify push
// Front end push: git push <branch> or origin master

const initialFormState = { name: '', description: ''}

function App() {
  
  const [beer, setBeer] = useState([]);
  const [authState, setAuthState] = useState()
  const [user, setUser] = useState()
  const [loggedIn, setLoggedIn] = useState()

  const loggedInState = () => {
    Auth.currentAuthenticatedUser()
      .then(sess => {
        setLoggedIn(true)
      }).catch(() => {
        setLoggedIn(false)
      });
  }


  useEffect(() => {
    //fetchBeer();

    loggedInState();

    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState)
      setUser(authData)
    })
  }, []);

  
  async function fetchBeer() {
    const apiData = await API.graphql({ query: listBeers });
    setBeer(apiData.data.listBeers.items)
  }


  console.log(beer)



  return authState === AuthState.SignedIn && user ? (

    <Router>
      <div className="App">
        <header className="App-header">
        <img src={logoWhite} className="App-logo" alt="logo" />
        <p>
            Barfly  バーフライ
        </p>
        <p>Hello, {user.name}</p>
        <AmplifySignOut />
          
        </header>
      </div>

    </Router>
    
  ) : (
  <AmplifyAuthContainer>
      <AmplifyAuthenticator usernameAlias='email'>
        <AmplifySignUp
          slot="sign-up"
          usernameAlias="email"
          headerText="Sign In Up For Barfly!"
          formFields={[
            {
              type: "email",
              label: "Enter Email",
              placeholder: "Email",
              inputProps: { required: true, autocomplete: "username" },
            },
            {
              type: "password",
              label: "Pasword Please",
              placeholder: "Password",
              inputProps: { required: true, autocomplete: "new-password" },
            },
            {
              type: "phone_number",
              label: "Custom Phone Label",
              placeholder: "Custom phone placeholder",
            },
          ]} 
        />

      <AmplifySignIn slot="sign-in" usernameAlias="email"  headerText="Sign In Too Barfly!"/>    

      </AmplifyAuthenticator>

  </AmplifyAuthContainer>
  )
}

export default App;
