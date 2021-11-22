import React, { MouseEventHandler, useContext } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { Button, CircularProgress, Box } from "@mui/material";
import logoWhite from "../BarflyLogoWhite.png";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../state/StateProvider";
import { getWholeMenu, listWholeMenu, listMenus } from "./../graphql/queries";
import LoadingIndicator from "./LoadingIndicator";
import prevDef from "../decorators/prevDef";

const Welcome = ({ onSignOut }: { onSignOut: () => {} }) => {
    const [state] = useStateValue();

    console.log(state.user.username);

    const WholeMenu = API.graphql({ query: listWholeMenu });
    const allMenu = API.graphql({ query: listMenus });
    async function logMenu() {
        console.log("allMenu: ", JSON.stringify(await allMenu));
        console.log("menu:", JSON.stringify(await WholeMenu));
    }

    logMenu();

    return (
        <div>
            <img src={logoWhite} className="App-logo" alt="logo" />
            <p>Hello, {state.user.username}</p>
            <Button
                href="/orderwell"
                
                variant="contained"
            >
                order
            </Button>

            <Button onClick={onSignOut} variant="contained">
                Log Out
            </Button>
        </div>
    );
};

export default Welcome;
