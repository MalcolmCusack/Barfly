import React from "react";
import { Button } from "@mui/material";
import logoWhite from "../BarflyLogoWhite.png";
import { useStateValue } from "../state/StateProvider";
import Menu from "./menu/Menu";
import Centerer from "./Centerer";

const Welcome = () => {
    return (
        <div>
            <img src={logoWhite} className="App-logo" alt="logo" />
            

            <div style={{ border: "1px solid black" }}>
                <Menu />
            </div>
        </div>
    );
};

export default Welcome;
