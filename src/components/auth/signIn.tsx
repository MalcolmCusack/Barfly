import { FormEvent, useState } from "react";
import logoWhite from "../../BarflyLogoWhite.png";
import { Auth } from "aws-amplify";
import { Link, useNavigate } from "react-router-dom";
import { TextField, Box } from "@mui/material";
import Button from "@mui/material/Button";
import "../../styles/auth.css";
import prevDef from "../../decorators/prevDef";
import LoadingIndicator from "../LoadingIndicator";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loggingIn, setLoggingIn] = useState(false);

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
        <div>
            <h1>Sign In To Barfly!</h1>
            <img src={logoWhite} className="App-logo" alt="logo" />

            <h2>Sign In</h2>
            <form onSubmit={prevDef(signIn)}>
                <TextField
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    label="email"
                    variant="outlined"
                    required
                />
                <TextField
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    label="password"
                    variant="outlined"
                    type="password"
                    required
                />
                <span>
                    Forgot your password?{" "}
                    <Link to="/forgotpass">Reset Password</Link>
                </span>
                <Box display="inline-block" width="20ch" height="5ch">
                    {loggingIn ? (
                        <LoadingIndicator size="30px" />
                    ) : (
                        <Button type="submit" variant="contained">
                            Sign In
                        </Button>
                    )}
                </Box>
            </form>
            <span>
                No account?<Link to="/signup">Create a Barfly Account</Link>
            </span>
        </div>
    );
};

export default SignIn;
