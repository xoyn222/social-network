import React from 'react';
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {MyPostsContainer, PostsData} from "./MyPosts/MyPostsContainer";
import {ProfileDataType} from "./ProfileContainer";

type ProfileType = {
    profile: ProfileDataType
    status: string
    updateStatusTC: (status: string) => void
}

const Profile = (props: ProfileType) => {
    return (
        <div className={s.container}>
            <ProfileInfo profile={props.profile} updateStatusTC={props.updateStatusTC} status={props.status}/>
            <MyPostsContainer />
        </div>
    );
}

export default Profile;
