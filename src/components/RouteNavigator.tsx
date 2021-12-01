import { useNavigate } from "react-router"

export default function RouteNavigator({navigate_ref, children} : {navigate_ref: any[], children: any}){
    const navigate = useNavigate();
    navigate_ref[0] = navigate;
    

    return children;
}