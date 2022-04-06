import React from 'react'
import UploadImageToS3WithReactS3 from './UploadProfileImg'
import DisplayProfileImg from './DisplayProfileImg'

function Profile() {
  
  return (
    <div>
      <div style={{margin: '1em'}}>
        <DisplayProfileImg/>

      </div>
        <UploadImageToS3WithReactS3 />
    </div>

    )
   
}

export default Profile