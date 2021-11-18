import { Navigate } from "react-router-dom";
import Welcome from "./components/welcome";
import SignUp from "./components/auth/signUp";
import ForgotPass from "./components/auth/forgotPass";
import SignIn from "./components/auth/signIn";

const routes = (isLoggedIn, loggedInState) => [
    {
        path: '/',
        element: isLoggedIn ? <Welcome /> : <Navigate to="/signin" />,
        children: [
            //{ path: '/signin', element: <SignIn />},
            { path: '/signup', element: <SignUp /> },
            { path: '/forgotpass', element: <ForgotPass/> },
            { path: '/', element: <Welcome onSignOut={loggedInState}/> }
        ]
    }
]

export default routes