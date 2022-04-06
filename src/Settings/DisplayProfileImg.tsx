import { Avatar } from "@mui/material";
import { API, graphqlOperation } from "aws-amplify";
import React from "react";
import Centerer from "../components/Centerer";
import { getUser } from "../graphql/queries";
import { useStateValue } from "../state/StateProvider";

function DisplayProfileImg(props: any) {
    const [{ user }] = useStateValue();
    const [profileImg, setProfileImg] = React.useState();

    const GetUser = async () => {
        try {
            const userRes = API.graphql(
                graphqlOperation(getUser, {
                    id: user.attributes.sub,
                })
            );

            const profile: any = await userRes;
            const location = JSON.parse(profile.data.getUser.profileImg);
            setProfileImg(location.img);

        } catch (err) {
            console.log(err);
        }
    };

    React.useEffect(() => {
        GetUser();
    }, []);

    return (
        <Centerer>
            <Avatar sx={{height: props.size, width: props.size }} alt="profile-img" src={profileImg} />
        </Centerer>
    );
}

export default DisplayProfileImg;
