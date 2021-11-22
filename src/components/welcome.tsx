import React, { useContext } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { Button, CircularProgress, Box } from "@mui/material";
import logoWhite from "../BarflyLogoWhite.png";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../state/StateProvider";
import { getWholeMenu, listWholeMenu, listMenus } from "./../graphql/queries";
import LoadingIndicator from "./LoadingIndicator";

const Welcome = ({ onSignOut }: { onSignOut: () => {} }) => {
    const [state] = useStateValue();

    console.log(state.user.username);

    const WholeMenu = API.graphql({ query: listWholeMenu });
    const allMenu = API.graphql({ query: listMenus });
    async function logMenu() {
        console.log("allMenu: ", await allMenu);
        console.log("menu:", await WholeMenu);
    }

    logMenu();

    return (
        <div>
            <img src={logoWhite} className="App-logo" alt="logo" />
            <p>Hello, {state.user.username}</p>
            <Button onClick={onSignOut} variant="contained">
                Log Out
            </Button>
        </div>
    );
};

export default Welcome;
