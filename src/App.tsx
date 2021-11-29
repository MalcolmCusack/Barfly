//import logoWhite from './BarflyLogoWhite.png';
import "./App.css";
import { useState, useEffect } from "react";
import { useStateValue } from "./state/StateProvider";
import { Auth, Hub } from "aws-amplify";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useParams,
} from "react-router-dom";
import { useNavigate } from "react-router";
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
import OrderStatus from "./components/payment/OrderStatus";
import { Box } from "@mui/material";
import { SnackbarProvider } from "notistack";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import SportsBarIcon from "@mui/icons-material/SportsBar";
import { color } from "@mui/system";
import RequestPasswordReset from "./components/auth/passwordReset/RequestPasswordReset";
import ResetPasswordPage from "./components/auth/passwordReset/ResetPasswordPage";
import RouteNavigator from "./components/RouteNavigator";
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
        <ThemeProvider theme={theme}>
            <SnackbarProvider maxSnack={1}>
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
                        <Box position="absolute" left="2ch">
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
                                onClick={() => navigate("/")}
                                style={{
                                    textDecoration: "none",
                                    fontSize: "3ch",
                                    cursor: "pointer",
                                }}
                            >
                                Barfly
                            </Typeography>
                        </Box>
                        {/* appbar-right */}
                        <Box position="absolute" right="2ch">
                            {user && (
                                <Tooltip
                                    title={`${order.length} Items in your order`}
                                >
                                    <IconButton
                                        onClick={() =>
                                            navigate("/ordersummary")
                                        }
                                    >
                                        <Box
                                            display="inline"
                                            sx={{
                                                color: (theme) =>
                                                    theme.palette.primary.main,
                                            }}
                                        >
                                            <SportsBarIcon color="primary" />
                                            <Typography
                                                color="primary"
                                                display="inline"
                                            >
                                                {order.length}
                                            </Typography>
                                        </Box>
                                    </IconButton>
                                </Tooltip>
                            )}
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
                            {user && (
                                <ListItemButton
                                    onClick={() => {
                                        closeDrawer();
                                        handleSignout().then(
                                            () => navigate("/")
                                        );
                                    }}
                                >
                                    Sign Out
                                </ListItemButton>
                            )}
                        </List>
                    </Box>
                </SwipeableDrawer>

                {/* ================= Router to all the pages ================= */}
                <Router>
                    <Box className="App" height="100%" width="100%">
                        <Routes>
                            {!user ? (
                                <>
                                    <Route
                                        path="/"
                                        element={
                                            <RouteNavigator
                                                navigate_ref={navigate_ref}
                                            >
                                                <SignIn />
                                            </RouteNavigator>
                                        }
                                    />
                                    <Route
                                        path="/signup"
                                        element={
                                            <RouteNavigator
                                                navigate_ref={navigate_ref}
                                            >
                                                <SignUp />
                                            </RouteNavigator>
                                        }
                                    />
                                    <Route
                                        path="/forgotpass"
                                        element={
                                            <RouteNavigator
                                                navigate_ref={navigate_ref}
                                            >
                                                <RequestPasswordReset />
                                            </RouteNavigator>
                                        }
                                    />
                                    <Route
                                        path="/resetpass/:email"
                                        element={
                                            <RouteNavigator
                                                navigate_ref={navigate_ref}
                                            >
                                                <ResetPasswordPage />
                                            </RouteNavigator>
                                        }
                                    />
                                </>
                            ) : (
                                <>
                                    <Route
                                        path="/"
                                        element={
                                            <RouteNavigator
                                                navigate_ref={navigate_ref}
                                            >
                                                <Welcome
                                                    onSignOut={handleSignout}
                                                />
                                            </RouteNavigator>
                                        }
                                    />

                                    <Route
                                        path="/ordersummary"
                                        element={
                                            <RouteNavigator
                                                navigate_ref={navigate_ref}
                                            >
                                                <OrderSummary />
                                            </RouteNavigator>
                                        }
                                    />

                                    <Route
                                        path="/payment"
                                        element={
                                            <RouteNavigator
                                                navigate_ref={navigate_ref}
                                            >
                                                <Payment />
                                            </RouteNavigator>
                                        }
                                    />

                                    <Route
                                        path="/orderstatus"
                                        element={
                                            <RouteNavigator
                                                navigate_ref={navigate_ref}
                                            >
                                                <OrderStatus />
                                            </RouteNavigator>
                                        }
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
