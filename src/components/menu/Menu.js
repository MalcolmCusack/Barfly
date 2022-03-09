import { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { getWholeMenu, listMenus } from "../../graphql/queries";
import LoadingIndicator from "../LoadingIndicator";
import MenuCategory from "./MenuCategory";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router";
import { useStateValue } from "../../state/StateProvider";

const Menu = () => {
    const [menu, setMenu] = useState({});
    const [menuID, setMenuID] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const [{ currentBar }] = useStateValue();

    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const response_promise = API.graphql(
                    graphqlOperation(listMenus, {
                        filter: { barID: { eq: currentBar.id } },
                    })
                );

                const response = await response_promise;

                var menuData = response.data.listMenus.items[0];
                setMenuID(String(menuData.id));
            } catch (err) {
                console.log(err);
            }

            try {
                setIsLoading(true);
                const tresponse_promise = API.graphql(
                    graphqlOperation(getWholeMenu, {
                        id: menuID,
                    })
                );

                const tresponse = await tresponse_promise;
                setMenu(tresponse.data.getMenu);

            } catch (err) {
                console.log(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchMenu();
    }, [ menuID]);

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
        <Box paddingBottom="5em">
            <h1>{currentBar.name}</h1>
            <h2>Menu</h2>
            {isLoading ? <LoadingIndicator size="30px" /> : renderMenu()}
            <Box height="2em" />
            <Button
                className="buttons"
                variant="contained"
                onClick={() => navigate(`/${currentBar.id}/ordersummary`)}
            >
                Place Order
            </Button>
        </Box>
    );
};

export default Menu;
