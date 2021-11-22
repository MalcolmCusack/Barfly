import React, { useContext, useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import {GraphQLOptions, GraphQLResult} from '@aws-amplify/api-graphql'
import { Button, CircularProgress, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../../state/StateProvider";
import { getWholeMenu, listWholeMenu, listMenus, getMenu, listBeers } from "../../graphql/queries";
import LoadingIndicator from "../LoadingIndicator";
import MenuItem from "./MenuItem";

const Menu = () => {
    const [state] = useStateValue();

    const [menu, setMenu] = useState({});
    const [isLoading, setIsloading] = useState(false)
    const [beers, setBeers] = useState();

    const navigator = useNavigate()

    //const menu = await (API.graphql({query: getWholeMenu, variables: {id: "c7171fde-ffc4-4635-9d9e-ab3852d3d0b9"}}) as Promise<ListMenuResult>)
    //const allTodos = await (API.graphql({ query: queries.listTodos }) as Promise<ListTodoResult>);

    const WholeMenu = API.graphql({ query: listWholeMenu });
    const allMenu = API.graphql({ query: listMenus });


    async function logMenu() {
        console.log("allMenu: ", await allMenu);
        console.log("WholeMenu:", await WholeMenu);

        //setMenu(WholeMenu)
        
    }

    useEffect(() => {
        //logMenu();
        const fetchMenu = async () => {
            try {
                const response = await API.graphql(graphqlOperation(getWholeMenu, {id: "c7171fde-ffc4-4635-9d9e-ab3852d3d0b9"}))
                //const responseBeer = await API.graphql(graphqlOperation(listBeers))
                console.log(response.data)
                setMenu(response.data.getMenu)
                //setBeers(responseBeer.data)
                setIsloading(true)
                
                
            } catch (err) {
                console.log(err)
            }
        }
        fetchMenu()
        
    }, [])

    //console.log(menu)
    //console.log(beers)

    const displayItems = ( key) => {
        menu[key].items.map(item => {
            console.log(item)
            return (
                <div>{item.name}</div>
            )
        })
        
    }
    

    
    const menuOptions = Object.keys(menu).map(key => {
        if (key === 'id') {
            return <></>
        } else {
            return <Button onClick={() => displayItems(key)} key={Math.random(10000) + ''}>{key}</Button>

        }
    })

    

    const renderMenu = () => {
        return (
            <div>
                {menuOptions}
            </div>
        )
    }

    console.log(menu)

    return (


        <div>
            
            menu
            {!isLoading ? <LoadingIndicator size="30px"/> : renderMenu()}
            
        </div>
    );
};

export default Menu;
