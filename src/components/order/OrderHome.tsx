import { Button, Typography, Box } from "@mui/material";
import React, { useState, useEffect } from "react";

function OrderLink({ image, label, href="#" }: { image: string; label: string, href?: string }) {
    return (
        <Button href={href} style={{ width: "50%", paddingTop: "60%", paddingBottom: 0, paddingRight: 0, paddingLeft:0, margin:0 }}>
            <Box position="absolute" top="0" left="0" bottom="0" right="0">
                <img src={image} style={{ width:"60%", objectFit: "contain" }} />
                <Typography>{label}</Typography>
            </Box>
        </Button>
    );
}

export default function OrderHome() {
    return (
        <Box display="flex"
        flexWrap="wrap">
            <OrderLink image="/beerIcon.png" label="beer"></OrderLink>
            <OrderLink image="/wellIcon.png" label="wells" href="/orderwell"></OrderLink>
            <OrderLink image="/wineIcon.png" label="wine"></OrderLink>
            <OrderLink image="/shotsIcon.png" label="shots"></OrderLink>
            <OrderLink image="/cocktailsIcon.png" label="cocktails"></OrderLink>
            <OrderLink image="/specialsIcon.png" label="specials"></OrderLink>
        </Box>
    );
}
