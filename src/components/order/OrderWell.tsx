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
import ControlPointIcon from '@mui/icons-material/ControlPoint';

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
        "vodka",
        "gin",
        "rum",
        "liquor",
        "vodka",
        "gin",
        "rum",
        "liquor",
        "vodka",
        "gin",
        "rum",
        "liquor",
        "vodka",
        "gin",
        "rum",
        "liquor",
        "vodka",
        "gin",
        "rum",
        "liquor",
        "vodka",
        "gin",
        "rum",
        "liquor",
        "vodka",
        "gin",
        "rum",
        "liquor",
    ];

    const brands = [
        { name: "grey_goose", img: "/brands/grey_goose.png", price: 800 },
        { name: "tito's", img: "/brands/tito's.png", price: 700 },
        { name: "grey_goose", img: "/brands/grey_goose.png", price: 800 },
        { name: "tito's", img: "/brands/tito's.png", price: 700 },
        { name: "grey_goose", img: "/brands/grey_goose.png", price: 800 },
        { name: "tito's", img: "/brands/tito's.png", price: 700 },
        { name: "grey_goose", img: "/brands/grey_goose.png", price: 800 },
        { name: "tito's", img: "/brands/tito's.png", price: 700 },
        { name: "grey_goose", img: "/brands/grey_goose.png", price: 800 },
        { name: "tito's", img: "/brands/tito's.png", price: 700 },
        { name: "grey_goose", img: "/brands/grey_goose.png", price: 800 },
        { name: "tito's", img: "/brands/tito's.png", price: 700 },
        { name: "grey_goose", img: "/brands/grey_goose.png", price: 800 },
        { name: "tito's", img: "/brands/tito's.png", price: 700 },
        { name: "grey_goose", img: "/brands/grey_goose.png", price: 800 },
        { name: "tito's", img: "/brands/tito's.png", price: 700 },
        { name: "grey_goose", img: "/brands/grey_goose.png", price: 800 },
        { name: "tito's", img: "/brands/tito's.png", price: 700 },
        { name: "grey_goose", img: "/brands/grey_goose.png", price: 800 },
        { name: "tito's", img: "/brands/tito's.png", price: 700 },
        { name: "grey_goose", img: "/brands/grey_goose.png", price: 800 },
        { name: "tito's", img: "/brands/tito's.png", price: 700 },
        { name: "grey_goose", img: "/brands/grey_goose.png", price: 800 },
        { name: "tito's", img: "/brands/tito's.png", price: 700 },
        { name: "grey_goose", img: "/brands/grey_goose.png", price: 800 },
        { name: "tito's", img: "/brands/tito's.png", price: 700 },
    ];

    const mixers = [
        {name: "sprite", img:"/mixers/sprite.png"},
        {name: "cocacola", img: "/mixers/cocacola.png"},
        {name: "sprite", img:"/mixers/sprite.png"},
        {name: "cocacola", img: "/mixers/cocacola.png"},
        {name: "sprite", img:"/mixers/sprite.png"},
        {name: "cocacola", img: "/mixers/cocacola.png"},
        {name: "sprite", img:"/mixers/sprite.png"},
        {name: "cocacola", img: "/mixers/cocacola.png"},
        {name: "sprite", img:"/mixers/sprite.png"},
        {name: "cocacola", img: "/mixers/cocacola.png"},
        {name: "sprite", img:"/mixers/sprite.png"},
        {name: "cocacola", img: "/mixers/cocacola.png"},
        {name: "sprite", img:"/mixers/sprite.png"},
        {name: "cocacola", img: "/mixers/cocacola.png"},
        ];

    return (
        <div>
            <Centerer>
                <img
                    src={wellIcon}
                    style={{ height:"20ch", objectFit: "contain" }}
                />
            </Centerer>
            {"test test "}
            <Typography>{liquor == null ? <><ControlPointIcon/> Add Liquor</>: `Liquor: ${liquor ?? "Undecided"}`}</Typography>
            <Tabs
                variant={"scrollable"}
                style={{
                    margin: "20px",
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: "10px",
                }}
                onChange={(_, value) => setLiquor(liquorChest[value])}
            >
                {liquorChest.map((liquor) => (
                    <Tab style={{color:"black"}} label={liquor} />
                ))}
            </Tabs>
            <br />
            <Typography>{brand == null ? <><ControlPointIcon/> Add Brand</> : `Brand: ${brand ?? "Undecided"}`}</Typography>
            <Tabs
                variant={"scrollable"}
                style={{
                    margin: "20px",
                }}
                onChange={(_, value) => setBrand(brands[value].name)}
            >
                {brands.map((brand) => (
                    // <Tab label={<img src={brand.img} />} />
                    <Tab label={<><img src={brand.img}/> <br/><Typography color="primary">{"$" + formatMoney(brand.price)}</Typography></>} />
                ))}
            </Tabs>
            <br />
            <Typography>{mixer == null ? <><ControlPointIcon/> Add Mixer</> : `Mixer: ${mixer}`}</Typography>
            <Tabs
                variant={"scrollable"}
                style={{
                    margin: "20px",
                }}
                onChange={(_,value) => setMixer(mixers[value].name)}
            >
                {mixers.map((mixer) => (
                    <Tab label={<img src={mixer.img} />} />
                ))}
            </Tabs>
            {/* {"test test "}
        <ButtonGroup style={{margin:"20px"}}>
            {liquorChest.map(liquor => <Button variant="contained">{liquor}</Button>)}
        </ButtonGroup> */}
        </div>
    );
}
