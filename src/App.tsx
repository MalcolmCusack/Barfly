//import logoWhite from './BarflyLogoWhite.png';
import "./App.css";
import { useState, useEffect, createContext } from "react";
import { useStateValue } from "./state/StateProvider";
import { Auth, Hub } from "aws-amplify";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useParams,
} from "react-router-dom";
import {
    ThemeProvider,
    createTheme,
    AppBar,
    Button,
    IconButton,
    Drawer,
    List,
    Toolbar,
    Link as Typeography,
    SwipeableDrawer,
    Typography,
    ListItem,
    ListItemButton,
    Tooltip,
} from "@mui/material";
import SignIn from "./components/auth/signIn";
import SignUp from "./components/auth/signUp";
import Welcome from "./components/welcome";
import OrderSummary from "./components/order/OrderSummary";
import Payment from "./components/payment/Payment";
import OrderStatus from "./components/order/OrderStatus";
import { Box } from "@mui/material";
import { SnackbarProvider } from "notistack";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import SportsBarIcon from "@mui/icons-material/SportsBar";
import { color } from "@mui/system";
import RequestPasswordReset from "./components/auth/passwordReset/RequestPasswordReset";
import ResetPasswordPage from "./components/auth/passwordReset/ResetPasswordPage";
import Common from "./components/Common";
import PaymentSuccess from "./components/payment/PaymentSuccess";

export const NavigateContext = createContext((path: string) => undefined);
console.debug("================= console.debug is enabled ===============");

// Back end push: amplify push
// Front end push: git push <branch> or origin master

const APPBAR_HEIGHT = "5ch";

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
    const navigate_ref = [];
    function navigate(path) {
        if (navigate_ref[0] != undefined) {
            navigate_ref[0](path);
        }
    }
    const [drawerOpen, setDrawerOpen] = useState(false);
    function toggleDrawerOpen() {
        setDrawerOpen(!drawerOpen);
    }
    function closeDrawer() {
        setDrawerOpen(false);
    }
    function openDrawer() {
        setDrawerOpen(true);
    }
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
        <NavigateContext.Provider value={navigate}>
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
                                                    <Welcome
                                                        onSignOut={
                                                            handleSignout
                                                        }
                                                    />
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
        </NavigateContext.Provider>
    );
}

export default App;
