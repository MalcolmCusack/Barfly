import React, { useState, useEffect } from "react";
import { useStateValue } from "../state/StateProvider";

export default function OrderScreen() {
    const [{ state, user, order }, dispatch] = useStateValue();
    const menu_json = `{
        "beers" : [
            {
                "name" : "piss",
                "brand" : "wasser",
                "price" : 500,
                "description" : "tastes like ____"
            },
            {
                "name" : "milller heaver",
                "brand" : "miller",
                "price" : 1056,
                "description": "Like miller light but with 20% alcohol content."
            }
        ],
    
        "cocktails" : [
            {
                "name" : "matini",
                "brand" : "monsanto",
                "price" : 2000,
                "description" : "Will make you leek soup out of your eyes.",
                "liquorType" : "",
                "mixers" : ["sand"]
            }
        ]
    }`;

    const menu = JSON.parse(menu_json);

    return <p>{JSON.stringify(menu)}</p>

}
