import { FormEvent, useState } from "react";
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
    function detectCapsLock(e: React.KeyboardEvent) {
        setCapsLock(e.getModifierState("CapsLock"));
    }

    const navigate = useNavigate();

    const signIn = async (event: any) => {
        try {
            setLoggingIn(true);
            await Auth.signIn(email, password);
            console.log("hit");

            navigate("/");
        } catch (err) {
            console.log(err);
        } finally {
            setLoggingIn(false);
        }
    };
    return (
        <div onKeyUp={prevDef(detectCapsLock)}>
            <h1>Sign In To Barfly!</h1>
            <img src={logoWhite} className="App-logo" alt="logo" />

            <h2>Sign In</h2>
            <form onSubmit={prevDef(signIn)}>
                <TextField
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    label="email"
                    style={{ borderColor: "green" }}
                    required
                />
                <br />
                <TextField
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    label="password"
                    variant="outlined"
                    type="password"
                    margin="normal"
                    required
                />

                <span style={{ fontSize: "14px" }}>
                    <br />
                    Forgot your password?{" "}
                    <Link style={{ color: "white" }} to="/forgotpass">
                        Reset Password
                    </Link>
                </span>

                <Box display="inline-block" height="7ch" width="12ch">
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
            </form>
            {capsLock && (
                <>
                    <span>⚠ CAPSLOCK IS ON ⚠</span>
                    <br />
                </>
            )}

            <span>
                No account?{" "}
                <Link style={{ color: "white" }} to="/signup">
                    Create a Barfly Account
                </Link>
            </span>
        </div>
    );
};

export default SignIn;
