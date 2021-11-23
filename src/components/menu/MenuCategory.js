
import { Button } from "@mui/material"
import { useState } from "react"
import MenuItem from "./MenuItem"

const MenuCategory = ({category, items}) => {

    const [show, setShow] = useState(false)

    const displayItems = () => {
        setShow(!show)
        
    }

    return (
        <div>
            <Button variant="outlined" onClick={displayItems} key={Math.random(10000) + ''}>{category}</Button>

            {show ? items.items.map(item => {
                return (
                    <MenuItem key={item.id} item={item}/>
                )
                
        }) :  <> </>}
        </div>
        
    )
}

export default MenuCategory
