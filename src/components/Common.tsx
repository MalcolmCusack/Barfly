/* This component provides views and toggles that are common 
throughout the website. */

import "../App.css";
import React,{ useState, createContext, useContext } from "react";
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
import DisplayProfileImg from "../Settings/DisplayProfileImg";

export const NavigateContext = createContext((path: string) => undefined);
console.debug("================= console.debug is enabled ===============");


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
    const [{ user, order, currentBar }] = useStateValue();

    const navigate = useNavigate();
    const { signOut } = useContext(ActionsContext);

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
                    {user && (
                        <Box position="absolute" left="2ch">
                            <IconButton
                                style={{ justifySelf: "flex-end" }}
                                onClick={toggleDrawerOpen}
                                color="primary"
                            >
                                <DisplayProfileImg  />
                            </IconButton>
                        </Box>
                    )}

                    {/* appbar-center */}
                    <Box>
                        <Typeography
                            onClick={() =>
                                navigate(
                                    currentBar ? `/${currentBar.id}/menu` : "/"
                                )
                            }
                            style={{
                                textDecoration: "none",
                                fontSize: "4ch",
                                cursor: "pointer",
                                fontFamily: "Lobster",
                                letterSpacing: "2px",
                            }}
                        >
                            Barfly
                        </Typeography>
                    </Box>
                    {/* appbar-right */}
                    <Box position="absolute" right="2ch">
                        {user && currentBar ? (
                            <Tooltip
                                title={`${order.length} Items in your order`}
                            >
                                <IconButton
                                    onClick={() =>
                                        navigate(
                                            `/${currentBar.id}/ordersummary`
                                        )
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
                        ) : null}
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
                                        navigate(`/`);
                                    }}
                                >
                                    Choose A Different Bar
                                </ListItemButton>
                                <ListItemButton
                                    onClick={() => {
                                        closeDrawer();
                                        navigate(
                                            `/orderstatus`
                                        );
                                    }}
                                >
                                    Order Status
                                </ListItemButton>
                                <ListItemButton
                                    onClick={() => {
                                        closeDrawer();
                                        navigate(`/profile`);
                                    }}
                                >
                                    Profile
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
