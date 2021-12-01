import { useContext, useEffect, useState } from "react";
import logoWhite from "../../BarflyLogoWhite.png";
import { Auth, API, graphqlOperation } from "aws-amplify";
import { Link, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import prevDef from "../../decorators/prevDef";
import { Box, Box as span } from "@mui/system";
import Centerer from "../Centerer";
import { ButtonGroup } from "@mui/material";
import { createUser, deleteTab } from "../../graphql/mutations";
import LoadingIndicator from "../LoadingIndicator";

const SignUp = () => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [password2, setPassword2] = useState(null);
    const [formIssue, setFormIssue_raw] = useState("");
    function setFormIssue(value) {
        setFormIssue_raw(value);
        setMessage(value);
    }
    const [message, setMessage] = useState("");

    const [phone, setPhone] = useState("");
    const [age, setAge] = useState("");
    const [name, setName] = useState("");
    const [code, setCode] = useState("");

    const [signingUp, setSigningUp] = useState(false);
    const [confirming, setConfirming] = useState(false);

    useEffect(() => {
        if (email === null || password === null || password2 === null) {
            setFormIssue("");
        } else if (password !== password2) {
            setFormIssue("Passwords Do Not Match");
        } else if (password === "") {
            setFormIssue("Password is Blank");
        } else if (email === "") {
            setFormIssue("Email is Blank");
        } else if (name === "") {
            setFormIssue("Name is Blank");
        } else {
            setFormIssue(null);
        }
    }, [email, password, password2, phone, age, name]);

    const [signedUp, setSignedUp] = useState(false);

    const navigate = useNavigate();

    const createAccount = async (event: any) => {
        event.preventDefault(); //prevents referesh
        try {
            setSigningUp(true);
            const data = Auth.signUp(name.replace(" ", ""), password, email);
            const dataResponse = await data;
            console.log(data);
            //Move this too confirm sign up later once error checking is implemented
            const user = API.graphql(
                graphqlOperation(createUser, {
                    input: {
                        id: dataResponse.userSub,
                        name: name,
                        email: email,
                    },
                })
            );
            const userResponse = await user;
            console.log(userResponse);
            setSignedUp(true);

            //onCreateAccount(name)
            //navigate('/confirmSignUp');
        } catch (err) {
            console.log(err);
            setMessage(err.message);
        } finally {
            setSigningUp(false);
        }
    };

    async function confirmSignUp() {
        try {
            setConfirming(true);
            await Auth.confirmSignUp(name.replace(" ", ""), code);
            navigate("/");
        } catch (error) {
            setMessage(error.message);
            console.log("error confirming sign up", error);
        } finally{
            setConfirming(false);
        }
    }

    const renderConfirmSignUp = () => {
        return (
            <div>
                <h2>Please Enter Confirmation Code From Email</h2>
                <img src={logoWhite} className="App-logo" alt="logo" />
                <TextField
                    fullWidth
                    margin="dense"
                    value={name ?? ""}
                    label="name"
                    variant="outlined"
                    disabled
                />
                <TextField
                    margin="dense"
                    value={code ?? ""}
                    onChange={(e) => setCode(e.target.value)}
                    label="code"
                    variant="outlined"
                    type="text"
                    required
                />
                
                <Box minHeight="2em">{message}</Box>
                <ButtonGroup style={{ width:"min(50ch, 100%)" }}>
                    <Button
                    style={{width:"50%"}}
                        size="large"
                        variant="outlined"
                        onClick={() => navigate("/")}
                    >
                        Back To Sign In
                    </Button>
                    {confirming ? (
                        <Box width="50%">
                            <LoadingIndicator size="3ch"/>
                        </Box>
                    ) : (
                        <Button
                        style={{width:"50%"}}
                            size="large"
                            variant="contained"
                            onClick={confirmSignUp}
                        >
                            CONFIRM
                        </Button>
                    )}
                </ButtonGroup>
            </div>
        );
    };

    const renderSignUp = () => {
        return (
            <div>
                {/* <h1>Sign Up For Barfly!</h1> */}
                <img src={logoWhite} className="App-logo" alt="logo" />

                <h2>Create An Account</h2>
                <form
                    onSubmit={prevDef((e) => {
                        if (formIssue === null) {
                            createAccount(e);
                        }
                    })}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "stretch",
                    }}
                >
                    <TextField
                        margin="dense"
                        value={name ?? ""}
                        onChange={(e) => setName(e.target.value)}
                        label="name"
                        variant="outlined"
                        type="text"
                        required
                    />
                    <TextField
                        margin="dense"
                        value={email ?? ""}
                        onChange={(e) => setEmail(e.target.value)}
                        label="email"
                        variant="outlined"
                        required
                    />
                    <TextField
                        margin="dense"
                        value={password ?? ""}
                        onChange={(e) => setPassword(e.target.value)}
                        label="Password"
                        variant="outlined"
                        type="password"
                        required
                    />
                    <TextField
                        margin="dense"
                        value={password2 ?? ""}
                        onChange={(e) => setPassword2(e.target.value)}
                        label="Confirm Password"
                        variant="outlined"
                        type="password"
                        required
                    />

                    <Box display="flex">
                        <TextField
                            margin="dense"
                            value={phone ?? ""}
                            onChange={(e) => setPhone(e.target.value)}
                            label="phone"
                            variant="outlined"
                            type="phone"
                            required
                            style={{ flexGrow: 1, minWidth: "5ch" }}
                        />
                        <TextField
                            margin="dense"
                            value={age ?? ""}
                            onChange={(e) => setAge(e.target.value)}
                            label="age"
                            type="number"
                            required
                            style={{ width: "20ch", minWidth: "10ch" }}
                        />
                    </Box>
                    <Box margin="1ch" marginBottom="1.3ch" lineHeight=".5em">{message}</Box>
                    <Centerer>
                        <ButtonGroup
                            style={{ width: "40ch", minWidth: "25ch" }}
                        >
                            <Button
                                style={{ width: "50%", height: "5ch" }}
                                variant="outlined"
                                onClick={() => navigate("/")}
                            >
                                Back To Sign In
                            </Button>
                            {signingUp ? (
                                <div style={{ width: "50%", height: "5ch" }}>
                                    <LoadingIndicator size="3ch" />
                                </div>
                            ) : (
                                <Button
                                    style={{ width: "50%", height: "5ch" }}
                                    variant="contained"
                                    type="submit"
                                    disabled={formIssue !== null}
                                >
                                    Sign Up!
                                </Button>
                            )}
                        </ButtonGroup>
                    </Centerer>
                </form>
                {/* <br />
                <span style={{ margin: "20px" }}>
                    Have an account?{" "}
                    <Link style={{ color: "white" }} to="/">
                        Sign In
                    </Link>
                </span> */}
            </div>
        );
    };

    return <>{!signedUp ? renderSignUp() : renderConfirmSignUp()}</>;
};

export default SignUp;
