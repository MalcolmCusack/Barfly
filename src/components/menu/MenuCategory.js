
import { Button } from "@mui/material"
import { useState } from "react"
import MenuItem from "./MenuItem"

const MenuCategory = ({category, items}) => {

    const [show, setShow] = useState(false)

    const displayItems = () => {
        setShow(!show)
        
    }

    const renderOrderables = () => {

        items.items.map(item => {
            console.log(item)
            console.log(show)
            return (
                <div style={{height: '100px'}}>
                    <h3>{item.name}</h3>
                    <p>{item.price}</p>
                </div>
            ) 
            
        })
       
    }


    return (
        <div>
            <Button onClick={displayItems} key={Math.random(10000) + ''}>{category}</Button>

            {show ? items.items.map(item => {
                return (
                    <MenuItem key={item.id} item={item}/>
                )
                
        }) :  <> </>}
        </div>
        
    )
}

export default MenuCategory
