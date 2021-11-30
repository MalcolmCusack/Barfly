import React, { useContext, useState} from "react";
import logoWhite from "../../../BarflyLogoWhite.png";
import { Auth } from "aws-amplify";
import { TextField, Box, ButtonGroup } from "@mui/material";
import Button from "@mui/material/Button";
import "../../../styles/auth.css";
//import prevDef from "../../../decorators/prevDef";
import LoadingIndicator from "../../LoadingIndicator";
import Centerer from "../../Centerer";
import { useNavigate } from "react-router";
//import { useParams } from "react-router";

export default function ResetPassword({email}:{email:string}) {
    console.log("Email:", email);
    const [code, setCode] = useState("");
    const [password, setPassword] = useState("");
    //const [email, setEmail] = useState("");
    const TEXTFIELD_SPACING = "2ch";

    // const [requestingReset, setRequestingReset] = useState(false);
    const [resetingPassword, setResetingPassword] = useState(false);

    const navigate = useNavigate();

    async function resetPassword() {
        try {
            Auth.forgotPasswordSubmit(email, code, password)
            setResetingPassword(true);
            navigate('/')
        } finally {
            setResetingPassword(false);
        }
    }

    

    return (
        <div>
            <img src={logoWhite} className="App-logo" alt="logo" />

            <h2>Reset Password</h2>
            <Centerer>
            <form
                onSubmit={resetPassword}
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ marginBottom: TEXTFIELD_SPACING, width:"100%"}}
                    required
                />
                <TextField
                    value={email}
                    //onChange={(e) => setPassword2(e.target.value)}
                    disabled
                    style={{ marginBottom: TEXTFIELD_SPACING, width:"100%" }}
                    
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
                            Reset
                        </Button>
                    )}
                </ButtonGroup>
            </form>
            </Centerer>
        </div>
    );
}
