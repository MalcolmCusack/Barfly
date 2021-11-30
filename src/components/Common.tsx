//import logoWhite from './BarflyLogoWhite.png';
import "../App.css";
import { useState, useEffect, createContext, useContext } from "react";
import { useStateValue } from "../state/StateProvider";
import { Auth, Hub } from "aws-amplify";
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
import { Box } from "@mui/material";
import { SnackbarProvider } from "notistack";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import SportsBarIcon from "@mui/icons-material/SportsBar";
import { useNavigate } from "react-router";
import { ActionsContext } from "../App";

export const NavigateContext = createContext((path: string) => undefined);
console.debug("================= console.debug is enabled ===============");

// Back end push: amplify push
// Front end push: git push <branch> or origin master

const APPBAR_HEIGHT = "5ch";

export default function Common({ children }: { children: any }) {
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


    const navigate = useNavigate();
    const {signOut} = useContext(ActionsContext);

    return (
        <>
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
                                    onClick={() => navigate("/ordersummary")}
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
                    {/* ===== Draw Content ==== */}
                    <List>
                        {user && (
                            <ListItemButton
                                onClick={() => {
                                    closeDrawer();
                                    signOut().then(() => navigate("/"));
                                }}
                            >
                                Sign Out
                            </ListItemButton>
                        )}
                    </List>
                </Box>
            </SwipeableDrawer>
            {children}
        </>
    );
}
