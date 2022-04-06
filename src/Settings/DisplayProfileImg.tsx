import { Avatar, IconButton } from '@mui/material'
import { API, graphqlOperation } from 'aws-amplify';
import React from 'react'
import { getUser } from '../graphql/queries';
import { useStateValue } from '../state/StateProvider';

function DisplayProfileImg() {

    const [{ user }] = useStateValue();
    const [profileImg, setProfileImg] = React.useState()

    const GetUser = async () => {
        try {
            const userRes = API.graphql(
                graphqlOperation(getUser, {
                    id: user.attributes.sub
                })
            );

            const profile:any = await userRes;
            const location = JSON.parse(profile.data.getUser.profileImg)
            console.log(location.img)
            setProfileImg(location.img)
            //console.log(JSON.parse(profile.data.getUser.profileImg))
            //setProfileImg(profile)
        } catch (err) {
            console.log(err);
        }
    };


    React.useEffect(() => {
    
        GetUser()

    }, []);



    
  return (
    <div>
        <IconButton onClick={() => alert("yeet")}>
        <Avatar alt='' src={profileImg}/>

        </IconButton>
    </div>
  )
}

export default DisplayProfileImg