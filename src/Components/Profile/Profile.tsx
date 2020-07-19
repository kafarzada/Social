import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { ProfilePageType, } from '../../redux/state';
import { ActionType } from '../../redux/profile-reducer';

type PropsType = {
    profilepage: ProfilePageType
    dispatch: (action: ActionType) => void
}

const Profile = (props: PropsType) => {

        

    return (
        
        <div className="">
            <ProfileInfo />
            <MyPosts
                posts={props.profilepage.posts}
                newPostText={props.profilepage.newPostText}
                dispatch={props.dispatch}/>
        </div>
    )
}

export default Profile;