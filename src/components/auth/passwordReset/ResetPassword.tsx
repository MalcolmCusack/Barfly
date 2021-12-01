import  {  useEffect, useState } from "react";
import logoWhite from "../../../BarflyLogoWhite.png";
import { Auth } from "aws-amplify";
import { TextField, Box, ButtonGroup } from "@mui/material";
import Button from "@mui/material/Button";
import "../../../styles/auth.css";
//import prevDef from "../../../decorators/prevDef";
import LoadingIndicator from "../../LoadingIndicator";
import { useNavigate } from "react-router";
import prevDef from "../../../decorators/prevDef";
import { useSnackbar } from "notistack";
//import { useParams } from "react-router";

export default function ResetPassword({ email }: { email: string }) {
    const [code, setCode] = useState("");
    const [password, setPassword] = useState(null);
    const [password2, setPassword2] = useState(null);
    const [message, setMessage] = useState("");
    const [passwordIssue, setPasswordIssue_raw] = useState("");
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    function setPasswordIssue(value) {
        setPasswordIssue_raw(value);
        setMessage(value);
    }

    useEffect(() => {
        if (password === null || password2 === null) {
            setPasswordIssue("");
        } else if (password !== password2) {
            setPasswordIssue("Passwords Do Not Match");
        } else if (password === "") {
            setPasswordIssue("Password is Blank");
        } else {
            setPasswordIssue(null);
        }
    }, [password, password2]);

    //const [email, setEmail] = useState("");
    const TEXTFIELD_SPACING = "2ch";

    // const [requestingReset, setRequestingReset] = useState(false);
    const [resetingPassword, setResetingPassword] = useState(false);

    const navigate = useNavigate();

    async function resetPassword() {
        try {
            if (passwordIssue !== null) {
                return;
            }
            setResetingPassword(true);
            await Auth.forgotPasswordSubmit(email, code, password);
            enqueueSnackbar("Password Reset Successfuly", {
                autoHideDuration: 5000,
            });
            navigate("/");
        } catch (err) {
            setMessage(err.message);
        } finally {
            setResetingPassword(false);
        }
    }

    return (
        <div>
            <img src={logoWhite} className="App-logo" alt="logo" />

            <h2>Reset Password</h2>
            <Box display="flex" flexDirection="column" alignItems="center">
                <Box width="min(100%, 60ch)">
                    <TextField
                        label="code"
                        value={code ?? ""}
                        onChange={(e) => setCode(e.target.value)}
                        style={{
                            marginBottom: TEXTFIELD_SPACING,
                            width: "100%",
                        }}
                        required
                        autoFocus
                        autoComplete="off"
                    />
                    <TextField
                        label="email"
                        value={email ?? ""}
                        disabled
                        style={{
                            marginBottom: TEXTFIELD_SPACING,
                            width: "100%",
                        }}
                    />
                    
                    <form
                        onSubmit={prevDef(resetPassword)}
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            width: "100%",
                        }}
                    >
                        <TextField
                            label="New Password"
                            value={password ?? ""}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            style={{
                                marginBottom: TEXTFIELD_SPACING,
                                width: "100%",
                            }}
                            required
                        />
                        <TextField
                            label="Confirm New Password"
                            value={password2 ?? ""}
                            onChange={(e) => setPassword2(e.target.value)}
                            type="password"
                            style={{
                                width: "100%",
                            }}
                            required
                        />
                        <Box height="2em">{message}</Box>
                        <ButtonGroup style={{ width: "100%", height: "5ch" }}>
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
                                    disabled={passwordIssue != null}
                                >
                                    Reset
                                </Button>
                            )}
                        </ButtonGroup>
                    </form>
                </Box>
            </Box>
        </div>
    );
}
