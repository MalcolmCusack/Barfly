import React, { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { getWholeMenu } from "../../graphql/queries";
import LoadingIndicator from "../LoadingIndicator";
import MenuCategory from "./MenuCategory";
import { listOrders } from "../../graphql/queries";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router";

const Menu = () => {
    const [menu, setMenu] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchMenu = async () => {
            try {
                setIsLoading(true);
                const response_promise = API.graphql(
                    graphqlOperation(getWholeMenu, {
                        id: "c7171fde-ffc4-4635-9d9e-ab3852d3d0b9",
                    })
                );
                const orders_promise = API.graphql(graphqlOperation(listOrders));

                const response = await response_promise
                //console.log(response.data);
                setMenu(response.data.getMenu);

                orders_promise.then(orders => console.log(orders));

            } catch (err) {
                console.log(err);
            }
            finally{
                setIsLoading(false);
            }
        };

        fetchMenu();


    }, []);

    const renderMenu = () => {
        return Object.keys(menu)
            .filter((category) => category !== "id")
            .map((category) => (
                <MenuCategory
                    key={category}
                    category={category}
                    items={menu[category]}
                    
                />
            ));
    };

    return (
        <Box>
            <h2>Menu</h2>
            {isLoading ? <LoadingIndicator size="30px" /> : renderMenu()}
            <Box height="2em"/>
            <Button
                variant="contained"
                onClick={() => navigate("./ordersummary")}
            >
                Place Order
            </Button>
        </Box>
    );
};

export default Menu;
