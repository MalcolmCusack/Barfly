//import logoWhite from './BarflyLogoWhite.png';
import "./App.css";
import { useState, useEffect, createContext } from "react";
import { useStateValue } from "./state/StateProvider";
import { Auth, Hub } from "aws-amplify";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import {
    ThemeProvider,
    createTheme,
} from "@mui/material";
import SignIn from "./components/auth/signIn";
import SignUp from "./components/auth/signUp";
import Welcome from "./components/welcome";
import OrderSummary from "./components/order/OrderSummary";
import Payment from "./components/payment/Payment";
import OrderStatus from "./components/order/OrderStatus";
import { Box } from "@mui/material";
import { SnackbarProvider } from "notistack";
import RequestPasswordReset from "./components/auth/passwordReset/RequestPasswordReset";
import ResetPasswordPage from "./components/auth/passwordReset/ResetPasswordPage";
import Common from "./components/Common";
import PaymentSuccess from "./components/payment/PaymentSuccess";

export const ActionsContext = createContext(
    {} as { fetchData: () => void; signOut: () => Promise<void> }
);
console.debug("================= console.debug is enabled ===============");

// Back end push: amplify push
// Front end push: git push <branch> or origin master

const theme = createTheme({
    palette: {
        divider: "#fcba03",
        mode: "dark",
        primary: {
            main: "#fcba03",
            contrastText: "black",
            light: "#fcba03",
            dark: "#fcba03",
        },
        secondary: {
            main: "#222",
            contrastText: "white",
            light: "white",
            dark: "black",
        },
        background: {
            default: "#fcba03",
        },
        text: {
            primary: "#fcba03",
            secondary: "#eee",
        },
    },
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    backgroundClip: "black",
                },
            },
        },
    },
});

function App() {
    const [{ state, user }, dispatch] = useStateValue();

    const [triggerFetch, setTriggerFetch] = useState(false);

    function fetchData() {
        setTriggerFetch(true);
    }

    async function signOut() {
        try {
            await Auth.signOut();
            dispatch({ type: "RESET_USER_DATA" });
        } catch (error) {
            console.log(error);
        }
    }

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
                    }
                    break;
                default:
                    return;
            }
        };

        HubListener();
        fetchUserData().then(() => {
            // load order after loading user data
            dispatch({ type: "LOAD_ORDER" });
        });

        return () => {
            Hub.remove("auth", () => {});
            isMounted = false;
        };
    }, [triggerFetch]);

    return (
        <ActionsContext.Provider value={{ fetchData, signOut }}>
            <ThemeProvider theme={theme}>
                <SnackbarProvider maxSnack={1}>
                    {/* ================= Router to all the pages ================= */}
                    <Router>
                        <Box className="App" height="100%" width="100%">
                            <Routes>
                                {!user ? (
                                    <>
                                        <Route
                                            path="/"
                                            element={
                                                <Common>
                                                    <SignIn />
                                                </Common>
                                            }
                                        />
                                        <Route
                                            path="/signup"
                                            element={
                                                <Common>
                                                    <SignUp />
                                                </Common>
                                            }
                                        />
                                        <Route
                                            path="/forgotpass"
                                            element={
                                                <Common>
                                                    <RequestPasswordReset />
                                                </Common>
                                            }
                                        />
                                        <Route
                                            path="/resetpass/:email"
                                            element={
                                                <Common>
                                                    <ResetPasswordPage />
                                                </Common>
                                            }
                                        />
                                    </>
                                ) : (
                                    <>
                                        <Route
                                            path="/"
                                            element={
                                                <Common>
                                                    <Welcome />
                                                </Common>
                                            }
                                        />

                                        <Route
                                            path="/ordersummary"
                                            element={
                                                <Common>
                                                    <OrderSummary />
                                                </Common>
                                            }
                                        />

                                        <Route
                                            path="/payment"
                                            element={
                                                <Common>
                                                    <Payment />
                                                </Common>
                                            }
                                        />

                                        <Route
                                            path="/paymentsuccess"
                                            element={
                                                <Common>
                                                    <PaymentSuccess />
                                                </Common>
                                            }
                                        />

                                        <Route
                                            path="/orderstatus"
                                            element={
                                                <Common>
                                                    <OrderStatus />
                                                </Common>
                                            }
                                        />
                                    </>
                                )}
                            </Routes>
                        </Box>
                    </Router>
                </SnackbarProvider>
            </ThemeProvider>
        </ActionsContext.Provider>
    );
}

export default App;
