import React, { useContext, useState} from "react";
import logoWhite from "../../../BarflyLogoWhite.png";
import { Auth } from "aws-amplify";
import { TextField, Box, ButtonGroup } from "@mui/material";
import Button from "@mui/material/Button";
import "../../../styles/auth.css";
//import prevDef from "../../../decorators/prevDef";
import LoadingIndicator from "../../LoadingIndicator";
import Centerer from "../../Centerer";
import { useSleep } from "../../../hooks/timing";
import { NavigateContext } from "../../../App";

export default function RequestPasswordReset() {
    const [email, setEmail] = useState("");
    const [requestingReset, setRequestingReset] = useState(false);

    async function requestPasswordReset(event) {
        event.preventDefault()
        try {
            Auth.forgotPassword(email)
            setRequestingReset(true);
            navigate("/resetpass/" + email)

        } finally {
            setRequestingReset(false);
        }
    }

    const navigate = useContext(NavigateContext);

    return (
        <div>
            <img src={logoWhite} className="App-logo" alt="logo" />

            <h2>Request Password Reset</h2>
            <Centerer>
            <form
                onSubmit={requestPasswordReset}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width:"min(100%, 50ch)"
                }}
            >
                <TextField
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    label="email"
                    style={{ marginBottom:"2ch", width:"100%" }}
                    required
                />
                <ButtonGroup
                    style={{ width: "min(100%, 50ch)", height: "5ch" }}
                >
                    <Button
                        variant="outlined"
                        style={{ width: "50%" }}
                        onClick={() => navigate("/")}
                    >
                        Back To Signin
                    </Button>
                    {requestingReset ? (
                        <Box width="50%" height="100%">
                            <LoadingIndicator size="30px" />
                        </Box>
                    ) : (
                        <Button
                            size="large"
                            type="submit"
                            variant="contained"
                            style={{ width: "50%", height: "100%" }}
                        >
                            Reset
                        </Button>
                    )}
                </ButtonGroup>
            </form>
            </Centerer>
            
        </div>
    );
}
