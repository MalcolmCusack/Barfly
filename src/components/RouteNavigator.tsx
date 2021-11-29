import { useEffect } from "react";
import { Route, useNavigate } from "react-router"

export default function RouteNavigator({navigate_ref} : {navigate_ref: any[]}){
    const navigate = useNavigate();
    navigate_ref[0] = navigate;
    

    return <></>;
}