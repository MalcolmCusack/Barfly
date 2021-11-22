import React, { useContext, useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import {GraphQLOptions, GraphQLResult} from '@aws-amplify/api-graphql'
import { Button, CircularProgress, Box } from "@mui/material";
import logoWhite from "../BarflyLogoWhite.png";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../state/StateProvider";
import { getWholeMenu, listWholeMenu, listMenus } from "./../graphql/queries";
import LoadingIndicator from "./LoadingIndicator";
import { Menu } from "../API";
import { AmplifyConfirmSignUp } from "@aws-amplify/ui-react";

const Welcome = ({ onSignOut }: { onSignOut: () => {} }) => {
    const [state] = useStateValue();

    const [menu, setMenu] = useState<Menu | undefined>(undefined);

    console.log(state.user.username);
    //const menu = await (API.graphql({query: getWholeMenu, variables: {id: "c7171fde-ffc4-4635-9d9e-ab3852d3d0b9"}}) as Promise<ListMenuResult>)
    //const allTodos = await (API.graphql({ query: queries.listTodos }) as Promise<ListTodoResult>);

    const WholeMenu = API.graphql({ query: listWholeMenu });
    const allMenu = API.graphql({ query: listMenus });


    async function logMenu() {
        console.log("allMenu: ", await allMenu);
        console.log("WholeMenu:", await WholeMenu);

        //setMenu(WholeMenu)
        
    }

    async function gql<T extends object>(options: GraphQLOptions, addistionalHeaders?: {
        [key: string]: string;

    }) : Promise<GraphQLResult<T>> {
        const query = API.graphql(options, addistionalHeaders) as Promise<GraphQLResult<T>>
        return query
    }

    useEffect(() => {
        //logMenu();
        const fetchMenu = async () => {
            try {
                const response = (await API.graphql(graphqlOperation(getWholeMenu, {id: "c7171fde-ffc4-4635-9d9e-ab3852d3d0b9"})) as {data: Menu});
                setMenu(response.data)
                console.log(response.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchMenu()
        
    }, [])

    console.log(menu)

    const renderMenu = () => {
        return (
            <div>
                
            </div>
        )
    }


    return (
        <div>
            <img src={logoWhite} className="App-logo" alt="logo" />
            <p>Hello, {state.user.username}</p>
        <div style={{border:"1px solid black"}}>
    
        </div>

            <Button onClick={onSignOut} variant="contained">
                Log Out
            </Button>
        </div>
    );
};

export default Welcome;
