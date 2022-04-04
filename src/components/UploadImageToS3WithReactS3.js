import React , {useState} from 'react';
import { uploadFile } from 'react-s3';


const S3_BUCKET ='barfly-pics';
const REGION ='us-west-2';
const ACCESS_KEY ='AKIA33JESCSVFLWNP6VN';
const SECRET_ACCESS_KEY ='';

const config = {
    bucketName: S3_BUCKET,
    region: REGION,
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_ACCESS_KEY,
}

const UploadImageToS3WithReactS3 = () => {

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileInput = (e) => {
        setSelectedFile(e.target.files[0]);
    }

    const handleUpload = async (file) => {
        uploadFile(file, config)
            .then(data => console.log(data))
            .catch(err => console.error(err))
    }

    return <div>
        <div>Choose a file</div>
        <input type="file" onChange={handleFileInput}/>
        <button onClick={() => handleUpload(selectedFile)}> Upload </button>
    </div>
}

export default UploadImageToS3WithReactS3;