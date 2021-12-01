import { FormEvent, useContext, useState } from "react";
import logoWhite from "../../BarflyLogoWhite.png";
import { Auth } from "aws-amplify";

import { Link, useNavigate } from "react-router-dom";
import { TextField, Box } from "@mui/material";
import Button from "@mui/material/Button";
import "../../styles/auth.css";
import prevDef from "../../decorators/prevDef";
import LoadingIndicator from "../LoadingIndicator";
import Centerer from "../Centerer";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loggingIn, setLoggingIn] = useState(false);
    const [capsLock, setCapsLock] = useState(false);
    const [message, setMessage] = useState("");
    function detectCapsLock(e: React.KeyboardEvent) {
        setCapsLock(e.getModifierState("CapsLock"));
    }

    const navigate = useNavigate();

    const signIn = async (event: any) => {
        try {
            setLoggingIn(true);

            await Auth.signIn(email, password);
            console.log("hit");

            setMessage("Loggin Successful");
            navigate("/");
        } catch (err) {
            setMessage(err.message);
            console.error(err);
        } finally {
            setLoggingIn(false);
        }
    };


    return (
        <div onKeyUp={prevDef(detectCapsLock)}>
            
            <img src={logoWhite} className="App-logo" alt="logo" />

            <h2>Sign In</h2>
            <form
                onSubmit={prevDef(signIn)}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "stretch",
                }}
            >
                <TextField
                    value={email ?? ""}
                    onChange={(e) => setEmail(e.target.value)}
                    label="email"
                    required
                />
                <Box height="1.3em" lineHeight="2.9em" alignSelf="flex-start">
                    {capsLock && "⚠ CAPSLOCK IS ON ⚠"}
                </Box>
                <TextField
                    value={password ?? ""}
                    onChange={(e) => setPassword(e.target.value)}
                    label="password"
                    variant="outlined"
                    type="password"
                    margin="normal"
                    required
                />
                <Box height="1.3em" lineHeight=".8em" alignSelf="flex-start">
                    {message}
                </Box>
                {/* caps lock warning: only a littler pointless on a mobile-focused website */}
                <Centerer>
                    <Box display="inline-block" width="12ch" marginBottom="1em">
                        {loggingIn ? (
                            <LoadingIndicator size="30px" />
                        ) : (
                            <Centerer>
                                <Button
                                    size="large"
                                    type="submit"
                                    variant="contained"
                                >
                                    Sign In
                                </Button>
                            </Centerer>
                        )}
                    </Box>
                </Centerer>
                <br />
                <span style={{ fontSize: "1em" }}>
                    <Link style={{ color: "white" }} to="/forgotpass">
                        Forgot Password
                    </Link>{" "}
                    <Link style={{ color: "white" }} to="/signup">
                        Create Account
                    </Link>
                </span>
            </form>
        </div>
    );
};

export default SignIn;
