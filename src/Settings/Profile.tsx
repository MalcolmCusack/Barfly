import React from 'react'
import UploadImageToS3WithReactS3 from './UploadProfileImg'
import DisplayProfileImg from './DisplayProfileImg'

function Profile() {
  
  return (
    <div>
        <DisplayProfileImg />
        <UploadImageToS3WithReactS3 />
    </div>

    )
   
}

export default Profile