//import logoWhite from './BarflyLogoWhite.png';
import "./App.css";
import { useState, useEffect } from "react";
import { useStateValue } from "./state/StateProvider";
import { Auth, Hub } from "aws-amplify";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import SignIn from "./components/auth/signIn";
import SignUp from "./components/auth/signUp";
import Welcome from "./components/welcome";
import MenuItem from "./components/menu/MenuItem";
import OrderScreen from "./components/OrderScreen";

// Back end push: amplify push
// Front end push: git push <branch> or origin master

const theme = createTheme({
    palette: {
        primary: {
            main: "#fcba03",
        },
        secondary: {
            main: "#fcba03",
        },
    }
});

function App() {
    const [{ state, user, order }, dispatch] = useStateValue();

    const [triggerFetch, setTriggerFetch] = useState(false);

    const handleSignout = async () => {
        try {
            await Auth.signOut();
            setTriggerFetch(false);
            dispatch({ type: "RESET_USER_DATA" });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        let isMounted = true;

        const fetchUserData = async () => {
            if (isMounted) {
                dispatch({ type: "FETCH_USER_DATA_INIT" });
            }
            try {
                if (isMounted) {
                    const data = await Auth.currentAuthenticatedUser();
                    if (data) {
                        dispatch({
                            type: "FETCH_USER_DATA_SUCCESS",
                            payload: { user: data },
                        });
                    }
                }
            } catch (error) {
                if (isMounted) {
                    dispatch({ type: "FETCH_USER_DATA_FAULURE" });
                }
            }
        };

        const HubListener = () => {
            Hub.listen("auth", (data) => {
                const { payload } = data;
                onAuthEvent(payload);
            });
        };

        const onAuthEvent = (payload) => {
            switch (payload.event) {
                case "signIn":
                    if (isMounted) {
                        setTriggerFetch(true);
                        console.log("signed in");
                    }
                    break;
                default:
                    return;
            }
        };

        HubListener();
        fetchUserData();

        return () => {
            Hub.remove("auth", () => {});
            isMounted = false;
        };
    }, [triggerFetch]);

    return (
        <ThemeProvider theme={theme}>
            <Router>
                <div className="App">
                    <Routes>
                        {!user ? (
                            <>
                                <Route path="/" element={<SignIn />} />
                                <Route path="/signup" element={<SignUp />} />
                            </>
                        ) : (
                            <>
                                <Route
                                    path="/"
                                    element={
                                        <Welcome onSignOut={handleSignout} />
                                    }
                                />
                                <Route
                                    path="/order"
                                    element={<OrderScreen />}
                                />
                                <Route
                                    path="/Beers"
                                    element={<MenuItem />}
                                />
                                <Route
                                    path="/Shots"
                                    element={<MenuItem />}
                                />
                            </>
                        )}
                    </Routes>
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;
