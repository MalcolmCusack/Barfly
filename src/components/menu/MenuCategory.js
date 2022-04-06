/* This component takes a menu category as
input and displays the items in it. */

import React from "react";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuItem from "./MenuItem";

const MenuCategory = ({ category, items }) => {
    const filteredItems = items.items.filter((item) => item._deleted === null);

    return (
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography fontFamily={"Arial Black"}>{category}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                {filteredItems.map((item) => (
                    <MenuItem key={item.id} item={item} />
                ))}
            </AccordionDetails>
        </Accordion>
    );
};

export default MenuCategory;
