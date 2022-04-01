import React from 'react';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Typography
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuItem from "./MenuItem";

const MenuCategory = ({ category, items }) => {

    return (
        <Accordion >
            <AccordionSummary  expandIcon={<ExpandMoreIcon />}>
            <Typography fontFamily={"Arial Black"} >{category}</Typography>
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
