//import logoWhite from './BarflyLogoWhite.png';
import './App.css';
import React, {useState, useEffect} from 'react';
import { useStateValue } from './state/StateProvider';
import {SignInContext} from './contex/signInContext'
import { Auth, Hub } from 'aws-amplify'
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme} from '@material-ui/core/styles'
import SignIn  from './components/auth/signIn';
import ForgotPass from './components/auth/forgotPass';
import SignUp from './components/auth/signUp';
import Welcome from './components/welcome';
import ConfirmSignUp from './components/auth/confirmSignUp';



import {listBeers} from './graphql'
import { initialState } from './state/reducer';

// Back end push: amplify push
// Front end push: git push <branch> or origin master

const theme = createTheme({
  palette: {
    primary: {
      main: '#fcba03',
      secondary: '#fcba03'
    },
    secondary: {
      main: '#fcba03',
      secondary: '#fcba03'
    }
  }
})


function App() {

  const [ {state, user}, dispatch] = useStateValue();


  const [loggedIn, setLoggedIn] = useState(false)
  const [triggerFetch, setTriggerFetch] = useState(false)

  const loggedInState = () => {
    Auth.currentAuthenticatedUser()
      .then(sess => {
        setLoggedIn(true)
      }).catch(() => {
        setLoggedIn(false)
      });
  }

  const handleSignout = async () => {
    try {
      await Auth.signOut()
      setTriggerFetch(false)
      dispatch({type: 'RESET_USER_DATA'})
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {

    let isMounted = true


    const fetchUserData = async () => {
      if (isMounted) {
        dispatch({type: 'FETCH_USER_DATA_INIT'})
      }
      try {
        if (isMounted) {
          const data = await Auth.currentAuthenticatedUser()
          if (data) {
            dispatch({
              type: 'FETCH_USER_DATA_SUCCESS',
              payload: { user: data},
            })
          }
        }
      } catch (error) {
        if (isMounted) {
          dispatch({ type: 'FETCH_USER_DATA_FAULURE'})
        }
      }
    }

    const HubListener = () => {
      Hub.listen('auth', data => {
        const {payload} = data
        onAuthEvent(payload)
      })
    }

    const onAuthEvent = payload => {
      switch (payload.event) {
        case 'signIn':
          if (isMounted) {
            setTriggerFetch(true)
            console.log('signed in')
          }
        break
      default:
        return
      }
     
    
    }

    HubListener()
    fetchUserData()

    return () => {
      Hub.remove('auth')
      isMounted = false
    }

    /*const unsubscribe = () => (Auth.currentAuthenticatedUser((authUser) => {
      console.log(authUser)
      if (authUser) {  //if user signs in
        dispatch({
          type: "SET_USER",
          user: authUser
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null
        });
      }
    }));

    return () => { 
      console.log('unsubbed')
      // clean up actions
      unsubscribe(); //detaches and reattaches listener
    }

    //loggedInState();

    //eturn onAuthUIStateChange((nextAuthState, authData) => {
    //  setAuthState(nextAuthState)
     // setUser(authData)
    //}) */



  }, [triggerFetch] );

  
  //async function fetchBeer() {
  //  const apiData = await API.graphql({ query: listBeers });
  //  setBeer(apiData.data.listBeers.items)
  //}

  //console.log(AuthState.SignedIn)
  console.log(state)
  console.log(user)
  //console.log(loggedIn)

  return  (
      <ThemeProvider theme={theme}>
        

          <Router>
            <div className="App">
              <Routes>

              {
              !user ? (
                <>
                  
                  <Route path ='/' element={<SignIn />}/>
                  <Route path ='/forgotpass' element={<ForgotPass />} />
                  <Route path = '/signup' element={<SignUp />} />
          
                </>
              ) : (
              <>
              <Route  path='/' element={<Welcome onSignOut={handleSignout}/>}/>
              
              </>
              
              )
              }
              </Routes>
            </div>
          </Router>
  
      </ThemeProvider>

      

   
   
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
