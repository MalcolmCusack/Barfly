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
import { useParams } from "react-router";

export default function ResetPassword({email}:{email:string}) {
    console.log("Email:", email);
    const [code, setCode] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");
    const TEXTFIELD_SPACING = "2ch";

    // const [requestingReset, setRequestingReset] = useState(false);
    const [resetingPassword, setResetingPassword] = useState(false);
    const sleep = useSleep();
    async function resetPassword(email: string) {
        try {
            setResetingPassword(true);
            await sleep(1000);
        } finally {
            setResetingPassword(false);
        }
    }

    const navigate = useNavigate();

    return (
        <div>
            <img src={logoWhite} className="App-logo" alt="logo" />

            <h2>Reset Password</h2>
            <Centerer>
            <form
                onSubmit={prevDef(() => resetPassword(email))}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width:"min(100%, 50ch)"
                }}
            >
                <TextField
                    label="code"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    style={{ marginBottom: TEXTFIELD_SPACING}}
                    required
                    autoFocus
                    autoComplete="off"
                />
                <TextField
                    label="New Password"
                    value={password1}
                    onChange={(e) => setPassword1(e.target.value)}
                    style={{ marginBottom: TEXTFIELD_SPACING, width:"100%"}}
                    required
                />
                <TextField
                    label="Confirm New Password"
                    value={password2}
                    onChange={(e) => setPassword2(e.target.value)}
                    style={{ marginBottom: TEXTFIELD_SPACING, width:"100%" }}
                    required
                />
                <ButtonGroup
                    style={{ width: "100%", height: "5ch" }}
                >
                    <Button
                        variant="outlined"
                        style={{ width: "50%" }}
                        onClick={() => navigate("/")}
                    >
                        Back To Signin
                    </Button>
                    {resetingPassword ? (
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
                            Reset Password
                        </Button>
                    )}
                </ButtonGroup>
            </form>
            </Centerer>
        </div>
    );
}
