import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { ProfilePageType } from '../../redux/state';

type PropsType = {
    profilepage: ProfilePageType
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

const Profile = (props: PropsType) => {

        

    return (
        
        <div className="">
            <ProfileInfo />
            <MyPosts posts={props.profilepage.posts}
                     addPost={props.addPost}
                     newPostText={props.profilepage.newPostText}
                     updateNewPostText={props.updateNewPostText}/>
        </div>
    )
}

export default Profile;