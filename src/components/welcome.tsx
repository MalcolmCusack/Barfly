import React from "react";
import { Button} from "@mui/material";
import logoWhite from "../BarflyLogoWhite.png";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../state/StateProvider";
import Menu from "./menu/Menu";

const Welcome = ({ onSignOut }: { onSignOut: () => {} }) => {
    const [state] = useStateValue();

    const navigator = useNavigate()

    function navigate(destination:string) {
        navigator(destination)
    }

    return (
        <div>
            <img src={logoWhite} className="App-logo" alt="logo" />
            <h2>Hello, {state.user.username}</h2>
        <div style={{border:"1px solid black"}}>

        <Menu />
    
        </div>
            <Button onClick={() => navigate('./ordersummary')}>Order Summary</Button>
            <Button onClick={onSignOut} variant="contained">
                Log Out
            </Button>
        </div>
    );
};

export default Welcome;
