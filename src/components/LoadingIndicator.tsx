import React from "react";
import { CircularProgress } from "@mui/material";
import { styled } from "@mui/material/styles";
import Centerer from "./Centerer";

export default function LoadingIndicator({
    show,
    size = "10ch",
    ...rest
}: {
    show?: boolean;
    size?: string;
    rest?: any[];
}) {
    return (
        <Centerer>
            <CircularProgress style={{ width: size, height: size }} />
        </Centerer>
    );
}
