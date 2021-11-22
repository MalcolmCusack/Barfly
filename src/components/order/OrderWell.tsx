import API from "@aws-amplify/api";
import React, { useState, useEffect, useContext } from "react";
import { listMenus } from "../../graphql/queries";
import { useStateValue } from "../../state/StateProvider";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import { ButtonGroup, Button, Tabs, Tab, Typography } from "@mui/material";
import { useTheme } from "@mui/material";
import grey_goose from "../../brands/grey_goose.png";
import wellIcon from "../../wellIcon.png";
import Centerer from "../Centerer";
import {formatMoney} from "../../utils";

export default function OrderWell() {
    const [liquor, setLiquor] = useState(null);
    const [brand, setBrand] = useState(null);
    const [mixer, setMixer] = useState(null);
    const [menus, setMenus] = useState(null);
    const theme = useTheme();
    useEffect(() => {
        (
            API.graphql({ query: listMenus }) as Promise<GraphQLResult<object>>
        ).then((menus) => setMenus(menus));
    }, []);

    const liquorChest = [
        "vodka",
        "gin",
        "rum",
        "liquor",
        "liquor",
        "liquor",
        "liquor",
        "liquor",
        "liquor",
        "liquor",
        "liquor",
        "liquor",
        "liquor",
        "liquor",
        "liquor",
        "liquor",
        "liquor",
        "liquor",
        "liquor",
        "liquor",
        "liquor",
        "liquor",
        "liquor",
        "liquor",
        "liquor",
        "liquor",
        "liquor",
        "liquor",
    ];

    const brands = [
        { img: "/brands/grey_goose.png", price: 800 },
        { img: "/brands/tito's.png", price: 700 },
        { img: "/brands/grey_goose.png", price: 800 },
        { img: "/brands/tito's.png", price: 700 },
        { img: "/brands/grey_goose.png", price: 800 },
        { img: "/brands/tito's.png", price: 700 },
        { img: "/brands/grey_goose.png", price: 800 },
        { img: "/brands/tito's.png", price: 700 },
        { img: "/brands/grey_goose.png", price: 800 },
        { img: "/brands/tito's.png", price: 700 },
        { img: "/brands/grey_goose.png", price: 800 },
        { img: "/brands/tito's.png", price: 700 },
        { img: "/brands/grey_goose.png", price: 800 },
        { img: "/brands/tito's.png", price: 700 },
        { img: "/brands/grey_goose.png", price: 800 },
        { img: "/brands/tito's.png", price: 700 },
        { img: "/brands/grey_goose.png", price: 800 },
        { img: "/brands/tito's.png", price: 700 },
        { img: "/brands/grey_goose.png", price: 800 },
        { img: "/brands/tito's.png", price: 700 },
    ];

    const mixers = [
        "/mixers/sprite.png",
        "/mixers/cocacola.png",
        "/mixers/sprite.png",
        "/mixers/cocacola.png",
        "/mixers/sprite.png",
        "/mixers/cocacola.png",
        "/mixers/sprite.png",
        "/mixers/cocacola.png",
        "/mixers/sprite.png",
        "/mixers/cocacola.png",
        "/mixers/sprite.png",
        "/mixers/cocacola.png",
        "/mixers/sprite.png",
        "/mixers/cocacola.png",
        "/mixers/sprite.png",
        "/mixers/cocacola.png",
        "/mixers/sprite.png",
        "/mixers/cocacola.png",
    ];

    return (
        <div>
            <Centerer>
                <img
                    src={wellIcon}
                    style={{ width: "40%", objectFit: "contain" }}
                />
            </Centerer>
            {"test test "}
            <Tabs
                variant={"scrollable"}
                style={{
                    margin: "20px",
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: "10px",
                }}
            >
                {liquorChest.map((liquor) => (
                    <Tab style={{color:"black"}} label={liquor} />
                ))}
            </Tabs>
            <br />
            <Tabs
                variant={"scrollable"}
                style={{
                    margin: "20px",
                }}
            >
                {brands.map((brand) => (
                    // <Tab label={<img src={brand.img} />} />
                    <Tab label={<><img src={brand.img}/> <br/><Typography color="primary">{"$" + formatMoney(brand.price)}</Typography></>} />
                ))}
            </Tabs>
            <br />
            <Tabs
                variant={"scrollable"}
                style={{
                    margin: "20px",
                }}
            >
                {mixers.map((mixer) => (
                    <Tab label={<img src={mixer} />} />
                ))}
            </Tabs>
            {/* {"test test "}
        <ButtonGroup style={{margin:"20px"}}>
            {liquorChest.map(liquor => <Button variant="contained">{liquor}</Button>)}
        </ButtonGroup> */}
        </div>
    );
}
