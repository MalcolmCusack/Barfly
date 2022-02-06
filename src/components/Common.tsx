//import logoWhite from './BarflyLogoWhite.png';
import "../App.css";
import { useState, createContext, useContext } from "react";
import { useStateValue } from "../state/StateProvider";
import {
    AppBar,
    IconButton,
    List,
    Toolbar,
    Link as Typeography,
    SwipeableDrawer,
    Typography,
    ListItemButton,
    Tooltip,
} from "@mui/material";
import { Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import SportsBarIcon from "@mui/icons-material/SportsBar";
import { useNavigate } from "react-router";
import { ActionsContext } from "../App";

export const NavigateContext = createContext((path: string) => undefined);
console.debug("================= console.debug is enabled ===============");

// Back end push: amplify push
// Front end push: git push <branch> or origin master

const APPBAR_HEIGHT = "7ch";

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
                                fontSize: "4ch",
                                cursor: "pointer",
                                fontFamily: "Quintessential",
                                letterSpacing: "2px"
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
                            <>
                            <ListItemButton
                            onClick={() => {
                                closeDrawer();
                                navigate("/orderstatus");
                            }}
                        >
                            Order Summary
                        </ListItemButton>
                        <ListItemButton
                            onClick={() => {
                                closeDrawer();
                                navigate("/changepass");
                            }}
                        >
                            Change Password
                        </ListItemButton>
                        <ListItemButton
                                onClick={() => {
                                    closeDrawer();
                                    signOut().then(() => navigate("/"));
                                }}
                            >
                                Sign Out
                            </ListItemButton>
                            </>
                           

                        )}
                    </List>
                </Box>
            </SwipeableDrawer>
            {children}
        </>
    );
}
