//import logoWhite from './BarflyLogoWhite.png';
import './App.css';
import React, {useState, useEffect} from 'react'
import Amplify, {Auth, API, Storage, graphqlOperation } from 'aws-amplify'
import {AmplifyAuthenticator} from '@aws-amplify/ui-react'
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignIn  from './components/auth/signIn';
import ForgotPass from './components/auth/forgotPass';
import SignUp from './components/auth/signUp';
import Welcome from './components/welcome';
import ConfirmSignUp from './components/auth/confirmSignUp';


import {listBeers} from './graphql'

// Back end push: amplify push
// Front end push: git push <branch> or origin master


function App() {
  
  const [beer, setBeer] = useState([]);
  const [authState, setAuthState] = useState()
  const [user, setUser] = useState()
  const [loggedIn, setLoggedIn] = useState(false)


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

  //console.log(AuthState.SignedIn)
  console.log(user)
  console.log(loggedIn)

  return  (

        <Router>
          <div className="App">
            <Routes>

            {
             !loggedIn ? (
              <>
                
                <Route path ='/' element={<SignIn onSignIn={loggedInState}/>}/>
                <Route path ='/forgotpass' element={<ForgotPass />} />
                <Route path = '/signup' element={<SignUp onCreateAccount={setUser}/>} />
                <Route path = '/confirmsignup' element={<ConfirmSignUp username={user}/>} />
              </>
             ) : (
            <>
            <Route  path='/' element={<Welcome onSignOut={loggedInState}/>}/>
            
            </>
            
            )
            }
            </Routes>
          </div>
        </Router>

      

   
   
  ) /*: (
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
  ) */
} 

export default App;
