import React, { useState, useEffect, FormEvent } from "react";
import logoWhite from "../../../BarflyLogoWhite.png";
import { Auth } from "aws-amplify";
import { Link, useNavigate } from "react-router-dom";
import { TextField, Box, ButtonGroup } from "@mui/material";
import Button from "@mui/material/Button";
import "../../../styles/auth.css";
import prevDef from "../../../decorators/prevDef";
import LoadingIndicator from "../../LoadingIndicator";
import Centerer from "../../Centerer";
import { useSleep } from "../../../hooks/timing";

export default function RequestPasswordReset() {
    const [email, setEmail] = useState("");
    const [requestingReset, setRequestingReset] = useState(false);
    const sleep = useSleep();
    async function requestPasswordReset(email: string) {
        try {
            setRequestingReset(true);
            await sleep(1000);
        } finally {
            setRequestingReset(false);
        }
    }

    const navigate = useNavigate();

    return (
        <div>
            <img src={logoWhite} className="App-logo" alt="logo" />

            <h2>Request Password Reset</h2>
            <Centerer>
            <form
                onSubmit={prevDef(() => requestPasswordReset(email))}
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
                            Request Reset
                        </Button>
                    )}
                </ButtonGroup>
            </form>
            </Centerer>
            <a href="/resetpass/someemail">debugskip</a>
        </div>
    );
}
