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
import OrderScreen from "./components/OrderScreen";
import OrderSummary from "./components/order/OrderSummary";
import Payment from "./components/payment/Payment";

// Back end push: amplify push
// Front end push: git push <branch> or origin master

const theme = createTheme({
    palette: {
      divider:"#fcba03",
      mode:"dark",
        primary: {
            main: "#fcba03",
            contrastText: "black",
            light:"#fcba03",
            dark:"#fcba03",
        },
        secondary: {
            main: "#fcba03",
            contrastText: "black",
            light:"#fcba03",
            dark:"#fcba03",
        },
        background:{
          default: "#fcba03",
        },
        text:{
          primary: "#fcba03",
          secondary: "#fcba03",
        },

    },
    components:{
      MuiTextField:{
        styleOverrides:{
          root:{
            backgroundClip:"black",
          }
        }
      }
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
                                    element={<OrderHome/>}
                                />
                                <Route
                                    path="/orderwell"
                                    element={<OrderWell />}
                                />

                                <Route
                                    path="/ordersummary"
                                    element={<OrderSummary />}
                                />

                                <Route
                                    path="/payment"
                                    element={<Payment />}
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
