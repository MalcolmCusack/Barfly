import React, { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { getWholeMenu } from "../../graphql/queries";
import LoadingIndicator from "../LoadingIndicator";
import MenuCategory from "./MenuCategory";
import { listOrders } from "../../graphql/queries";
import { Box } from "@mui/material";

const Menu = () => {
    const [menu, setMenu] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchMenu = async () => {
            try {
                setIsLoading(true);
                const response = await API.graphql(
                    graphqlOperation(getWholeMenu, {
                        id: "c7171fde-ffc4-4635-9d9e-ab3852d3d0b9",
                    })
                );
                console.log(response.data);
                setMenu(response.data.getMenu);

                const orders = await API.graphql(graphqlOperation(listOrders));

                console.log(orders);
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
                    key={category + ""}
                    category={category}
                    items={menu[category]}
                />
            ));
    };

    console.log(menu);

    return (
        <Box>
            <h2>Menu</h2>
            {isLoading ? <LoadingIndicator size="30px" /> : renderMenu()}
        </Box>
    );
};

export default Menu;
