/* This component displays a "loading" component to be used
when processing/waiting for an action to be completed. */

import { CircularProgress } from "@mui/material";
import Centerer from "./Centerer";

export default function LoadingIndicator({
    show,
    size = "5ch",
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
