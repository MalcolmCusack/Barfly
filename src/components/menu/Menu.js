import React, { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { getWholeMenu} from "../../graphql/queries";
import LoadingIndicator from "../LoadingIndicator";
import MenuCategory from "./MenuCategory";
import { listOrders } from "../../graphql/queries";

const Menu = () => {

    const [menu, setMenu] = useState({});
    const [isLoading, setIsloading] = useState(false)

    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const response = await API.graphql(graphqlOperation(getWholeMenu, {id: "c7171fde-ffc4-4635-9d9e-ab3852d3d0b9"}))
                console.log(response.data)
                setMenu(response.data.getMenu)
                setIsloading(true)
                
                const orders = await API.graphql(graphqlOperation(listOrders))
            
                console.log(orders)
                
            } catch (err) {
                console.log(err)
            }
        }
        fetchMenu()
        
    }, [])
    
    const menuOptions = Object.keys(menu).map(category => {
        if (category === 'id') {
            return <></>
        } else {
            return <MenuCategory key={category + ''} category={category} items={menu[category]} />
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
            
            <h2>Menu</h2>
            {!isLoading ? <LoadingIndicator size="30px"/> : renderMenu()}
            
        </div>
    );
};

export default Menu;
