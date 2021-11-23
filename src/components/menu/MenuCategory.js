import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Button,
    Collapse,
} from "@mui/material";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuItem from "./MenuItem";

const MenuCategory = ({ category, items }) => {
    const [show, setShow] = useState(false);

    const displayItems = () => {
        setShow(!show);
    };

    return (
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                {category}
            </AccordionSummary>
            <AccordionDetails>
                {items.items.map((item) => (
                    <MenuItem key={item.id} item={item} />
                ))}
            </AccordionDetails>
        </Accordion>
    );
};

export default MenuCategory;
