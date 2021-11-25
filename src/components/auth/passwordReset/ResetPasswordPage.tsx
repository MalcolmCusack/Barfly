import React from "react";
import {useParams} from "react-router";
import ResetPassword from "./ResetPassword";

export default function ResetPasswordPage(){
    const params = useParams();
    return <ResetPassword email={params.email}/>
}
