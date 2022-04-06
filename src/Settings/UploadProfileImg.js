import React, { useEffect, useState } from "react";
import S3 from "react-aws-s3";
import { Button, TextField, Typography } from "@mui/material";
import { useStateValue } from "../state/StateProvider";
import { updateUser } from "../graphql/mutations";
import { API, graphqlOperation } from "aws-amplify";

const S3_BUCKET = "barfly-pics";
const REGION = "us-west-2";
const ACCESS_KEY = "AKIA33JESCSVFLWNP6VN";
const SECRET_ACCESS_KEY = "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";

const config = {
    bucketName: S3_BUCKET,
    region: REGION,
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_ACCESS_KEY,
};

const UploadImageToS3WithReactS3 = () => {

    const [{ user }] = useStateValue();

    const fileInput = React.useRef();

    async function updateUserImg(location) {
        const res = API.graphql(
            graphqlOperation(updateUser, {
                input: {
                    id: user.attributes.sub,
                    profileImg: JSON.stringify({img: location}),
                    _version: 4
                    
                },
            })
        );

        const userResponse = await res;
        console.log(userResponse)
    }
    const handleClick = async (event) => {
        event.preventDefault();
        if (fileInput.current) {
            console.log(fileInput.current.files);
            let file = fileInput.current.files[0];
            const newFileName = user.attributes.sub;

            const config = {
                bucketName: S3_BUCKET,
                dirName: "user_profile",
                region: REGION,
                accessKeyId: ACCESS_KEY,
                secretAccessKey: SECRET_ACCESS_KEY,
            };
            const ReactS3Client = new S3(config);
            ReactS3Client.uploadFile(file, newFileName).then((data) => {
                console.log(data);
                if (data.status === 204) {
                    console.log("success");
                    updateUserImg(data.location)
                
                } else {
                    console.log("fail");
                }
            });
        }
    };
    return (
        <>
            <form className="upload-steps" onSubmit={handleClick}>
                <Typography >
                    Upload Profile Photo:
                    <input type="file" ref={fileInput} accept=".jpeg,.png" />
                </Typography>
                <br />
                <Button type="submit">Upload</Button>
            </form>
        </>
    );
};

export default UploadImageToS3WithReactS3;
