import React , {useEffect, useState} from 'react';
import { uploadFile } from 'react-s3';
import { Storage } from 'aws-amplify';
import S3 from "react-aws-s3";
import { TextField } from '@mui/material';

const S3_BUCKET ='barfly-pics';
const REGION ='us-west-2';
const ACCESS_KEY ='AKIA33JESCSVFLWNP6VN';
const SECRET_ACCESS_KEY ='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';

const config = {
    bucketName: S3_BUCKET,
    region: REGION,
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_ACCESS_KEY,
}

const UploadImageToS3WithReactS3 = () => {

  const fileInput = React.useRef();
  const handleClick = (event) => {
    event.preventDefault();
    let file = fileInput.current.files[0];
    let newFileName = fileInput.current.files[0].name.replace(/\..+$/, "");
    newFileName = "Yeet"
    const config = {
      bucketName: S3_BUCKET,
      dirName: 'bot',
      region: REGION,
      accessKeyId: ACCESS_KEY,
      secretAccessKey: SECRET_ACCESS_KEY,
    };
    const ReactS3Client = new S3(config);
    ReactS3Client.uploadFile(file, newFileName).then((data) => {
      console.log(data);
      if (data.status === 204) {
        console.log("success");
      } else {
        console.log("fail");
      }
    });
  };
  return (
    <>
      <form className='upload-steps' onSubmit={handleClick}>
        <label>
          Upload file:
          <TextField type='file' ref={fileInput} />
        </label>
        <br />
        <button type='submit'>Upload</button>
      </form>
    </>
  );
}

export default UploadImageToS3WithReactS3;