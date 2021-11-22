import React from "react";
import { CircularProgress } from "@mui/material";
import { styled } from "@mui/material/styles";

const Centerer = styled("div")((theme) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height:"100%",
    width:"100%",
}));

export default function LoadingIndicator({
    show,
    size = "10ch",
    ...rest
}: {
    show?: boolean;
    size?: string;
    rest?: any[];
}) {
    return <Centerer><CircularProgress style={{width: size, height: size}}/></Centerer>
}
