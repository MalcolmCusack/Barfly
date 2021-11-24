//import logoWhite from './BarflyLogoWhite.png';
import "./App.css";
import { useState, useEffect } from "react";
import { useStateValue } from "./state/StateProvider";
import { Auth, Hub } from "aws-amplify";
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
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
} from "@mui/material";
import SignIn from "./components/auth/signIn";
import SignUp from "./components/auth/signUp";
import Welcome from "./components/welcome";
import OrderSummary from "./components/order/OrderSummary";
import Payment from "./components/payment/Payment";
import OrderStatus from "./components/payment/OrderStatus";
import { Box } from "@mui/material";
import { SnackbarProvider } from "notistack";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import SportsBarIcon from "@mui/icons-material/SportsBar";
import { color } from "@mui/system";
import RequestPasswordReset from "./components/auth/passwordReset/RequestPasswordReset";
import ResetPasswordPage from "./components/auth/passwordReset/ResetPasswordPage";
console.debug("================= console.debug is enabled ===============")

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
            secondary: "#fcba03",
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
        fetchUserData();

        return () => {
            Hub.remove("auth", () => {});
            isMounted = false;
        };
    }, [triggerFetch]);


    return (
        <ThemeProvider theme={theme}>
            <SnackbarProvider maxSnack={3}>
                <AppBar>
                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        position="relative"
                        width="100%"
                        height={APPBAR_HEIGHT}
                    >
                        {/* appbar-left */}
                        <Box position="absolute" left="0">
                            <IconButton
                                style={{ justifySelf: "flex-end" }}
                                onClick={toggleDrawerOpen}
                                color="primary"
                            >
                                <MenuIcon />
                            </IconButton>
                        </Box>
                        {/* appbar-center */}
                        <Box>
                            <Typeography
                                href="/"
                                style={{
                                    textDecoration: "none",
                                    fontSize: "3ch",
                                }}
                            >
                                Barfly
                            </Typeography>
                        </Box>
                        {/* appbar-right */}
                        <Box position="absolute" right="1ch">
                            <a
                                style={{
                                    textDecoration: "none",
                                    color: "#fcba03",
                                }}
                                href="/ordersummary"
                            >
                                <SportsBarIcon />
                                <span>{order.length}</span>
                            </a>

                            {/* put user profile thingy here */}
                        </Box>
                    </Box>
                </AppBar>
                <Toolbar />
                <SwipeableDrawer
                    open={drawerOpen}
                    onClose={closeDrawer}
                    onOpen={openDrawer}
                    anchor="left"
                    style={{
                        height: "100%",
                    }}
                    onBackdropClick={closeDrawer}
                >
                    <Box
                        height={APPBAR_HEIGHT}
                        style={{ backgroundColor: "#111" }}
                        position="relative"
                    >
                        <Box position="absolute" right="0">
                            <IconButton onClick={closeDrawer} color="primary">
                                <ChevronLeftIcon />
                            </IconButton>
                        </Box>
                    </Box>
                    <Box width="min(50vw, 30ch)">
                        <List>
                            <Button
                                onClick={() => {
                                    closeDrawer();
                                    handleSignout().then(
                                        () => (window.location.href = "/")
                                    );
                                }}
                                variant="contained"
                            >
                                Log Out
                            </Button>
                        </List>
                    </Box>
                </SwipeableDrawer>

                {/* ================= Router to all the pages ================= */}
                <Router>
                    <Box className="App" height="100%" width="100%">
                        <Routes>
                            {!user ? (
                                <>
                                    <Route path="/" element={<SignIn />} />
                                    <Route
                                        path="/signup"
                                        element={<SignUp />}
                                    />
                                    <Route
                                        path="/forgotpass"
                                        element={<RequestPasswordReset />}
                                    />
                                    <Route
                                        path="/resetpass/:email"
                                        element={<ResetPasswordPage />}
                                    />
                                </>
                            ) : (
                                <>
                                    <Route
                                        path="/"
                                        element={
                                            <Welcome
                                                onSignOut={handleSignout}
                                            />
                                        }
                                    />

                                    <Route
                                        path="/ordersummary"
                                        element={<OrderSummary />}
                                    />

                                    <Route
                                        path="/payment"
                                        element={<Payment />}
                                    />

                                    <Route
                                        path="/status"
                                        element={<OrderStatus />}
                                    />
                                </>
                            )}
                        </Routes>
                    </Box>
                </Router>
            </SnackbarProvider>
        </ThemeProvider>
    );
}

export default App;
