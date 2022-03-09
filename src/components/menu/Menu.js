import { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { getWholeMenu, listMenus } from "../../graphql/queries";
import LoadingIndicator from "../LoadingIndicator";
import MenuCategory from "./MenuCategory";
import SearchList from "../search/SearchList"
import { Box, Button, TextField, InputAdornment } from "@mui/material";
import { useNavigate } from "react-router";
import { useStateValue } from "../../state/StateProvider";
import SearchIcon from "@mui/icons-material/Search";

const Menu = () => {
    const [menu, setMenu] = useState({});
    const [menuID, setMenuID] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const [ {currentBar}, dispatch] = useStateValue();
    const [searchText, setSearchText] = useState("");
    const [items, setItems] = useState([]);

    let searchHandler = (e) => {
        var lowerCase = e.target.value.toLowerCase();
        setSearchText(lowerCase);
    };

    useEffect(() => {

        const fetchMenu = async () => {
            try {
                const response_promise = API.graphql(
                    graphqlOperation(listMenus, {filter: {barID: {eq: currentBar.id}}})
                );
        
                const response = await response_promise
                //console.log(response)  

                var menuData=response.data.listMenus.items[0]
                setMenuID(String(menuData.id))
                
    
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

                const tresponse = await tresponse_promise
                setMenu(tresponse.data.getMenu);
                console.log(tresponse.data.getMenu)
                
                //Need to iterate through all menu categories to search everything
                setItems(tresponse.data.getMenu.Beers.items)

            } catch (err) {
                console.log(err);
            }
            finally{
                setIsLoading(false);
            }
        };

        fetchMenu();


    }, [menuID]);
    console.log(items)
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
            <div className="search">
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  fullWidth
                  label="Search Menu"
                  onChange={searchHandler}
                  style={{ backgroundColor:"#292929", width: "60%", minWidth: "300px" }}
                  InputProps={{ endAdornment: ( <InputAdornment> <SearchIcon /> </InputAdornment> ) }}
               />
               {(searchText!="" && !isLoading) ? <SearchList input={searchText}  data={items} type="menuItem"></SearchList> : null}
            </div>
            <h2>Menu</h2>
            {isLoading ? <LoadingIndicator size="30px" /> : renderMenu()}
            <Box height="2em"/>
            <Button
                className='buttons'
                variant="contained"
                onClick={() => navigate("/ordersummary")}
            >
                Place Order
            </Button>
        </Box>
    );
};

export default Menu;
