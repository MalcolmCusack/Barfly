import React, { useContext, useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import {GraphQLOptions, GraphQLResult} from '@aws-amplify/api-graphql'
import { Button, CircularProgress, Box } from "@mui/material";
import logoWhite from "../BarflyLogoWhite.png";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../state/StateProvider";
import { getWholeMenu, listWholeMenu, listMenus } from "./../graphql/queries";
import LoadingIndicator from "./LoadingIndicator";
//import { Menu } from "../API";
import { AmplifyConfirmSignUp } from "@aws-amplify/ui-react";
import Menu from "./menu/Menu";

const Welcome = ({ onSignOut }: { onSignOut: () => {} }) => {
    const [state] = useStateValue();

    console.log(state.user.username);
    //const menu = await (API.graphql({query: getWholeMenu, variables: {id: "c7171fde-ffc4-4635-9d9e-ab3852d3d0b9"}}) as Promise<ListMenuResult>)
    //const allTodos = await (API.graphql({ query: queries.listTodos }) as Promise<ListTodoResult>);


    return (
        <div>
            <img src={logoWhite} className="App-logo" alt="logo" />
            <p>Hello, {state.user.username}</p>
        <div style={{border:"1px solid black"}}>

        <Menu />
    
        </div>

            <Button onClick={onSignOut} variant="contained">
                Log Out
            </Button>
        </div>
    );
};

export default Welcome;
