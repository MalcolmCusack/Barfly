import React from "react";
import S3 from "react-aws-s3";
import { Button, Typography } from "@mui/material";
import { useStateValue } from "../state/StateProvider";
import { updateUser } from "../graphql/mutations";
import { API, graphqlOperation } from "aws-amplify";
import { getUser } from "../graphql/queries";
import { useSnackbar } from "notistack";

const S3_BUCKET = "barfly-pics";
const REGION = "us-west-2";
const ACCESS_KEY = "AKIA33JESCSVFLWNP6VN";
const SECRET_ACCESS_KEY = "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";

const UploadImageToS3WithReactS3 = () => {
    const [{ user }] = useStateValue();

    const { enqueueSnackbar } = useSnackbar();

    const [photo, setPhoto] = React.useState()

    const getVersion = async () => {
        try {
            const userRes = API.graphql(
                graphqlOperation(getUser, {
                    id: user.attributes.sub,
                })
            );

            const profile = await userRes;
            return profile.data.getUser._version;
        } catch (err) {
            console.log(err);
        }
    };

    const fileInput = React.useRef();

    async function updateUserImg(location) {
        const version = await getVersion();

        const res = API.graphql(
            graphqlOperation(updateUser, {
                input: {
                    id: user.attributes.sub,
                    profileImg: JSON.stringify({ img: location }),
                    _version: version,
                },
            })
        );

        const userResponse = await res;
        return userResponse;
    }
    const handleClick = async (event) => {
        event.preventDefault();
        if (fileInput.current) {
            let file = fileInput.current.files[0];
            const newFileName = user.attributes.sub;

            // TODO change to ENV
            const config = {
                bucketName: S3_BUCKET,
                dirName: "user_profile",
                region: REGION,
                accessKeyId: ACCESS_KEY,
                secretAccessKey: SECRET_ACCESS_KEY,
            };

            const ReactS3Client = new S3(config);
            ReactS3Client.uploadFile(file, newFileName).then((data) => {
                if (data.status === 204) {
                    updateUserImg(data.location);
                    enqueueSnackbar('Upload Successful', {
                        autoHideDuration: 1000,
                    });
                } else {
                    enqueueSnackbar('Upload Unsuccessful', {
                        autoHideDuration: 1000,
                    });
                    console.log("fail");
                }
            });
        }
    };

    return (
        <div style={{ margin: "1em" }}>
            <form
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
                onSubmit={handleClick}
            >
                <Typography>Upload Profile Photo:</Typography>
                <input
                    id="raised-button-file"
                    style={{ display: "none" }}
                    type="file"
                    ref={fileInput}
                    accept=".jpeg,.png"
                    onChange={(e) => setPhoto(URL.createObjectURL(e.target.files[0]))}
                />
                <label htmlFor="raised-button-file">
                    <Button
                        sx={{margin: '1em'}}
                        variant="outlined"
                        component="span"
                        
                    >
                        Select a file
                    </Button>
                </label>
                {photo && (
                    <img style={{height: 'auto', width: '10em'}} alt="Profile-Img" src={photo}/>
                )}

                <br />
                <Button variant="contained" disabled={!photo} type="submit">Upload</Button>
            </form>
        </div>
    );
};

export default UploadImageToS3WithReactS3;
