import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { StoreType } from '../../redux/state';

type PropsType = {
    store: StoreType
}

const Profile = (props: PropsType) => {

        let state = props.store.getState().profilePage;

    return (
        
        <div className="">
            <ProfileInfo />
            <MyPosts
                posts={state.posts}
                newPostText={state.newPostText}
                dispatch={props.store.dispatch.bind(props.store)}/>
        </div>
    )
}

export default Profile;