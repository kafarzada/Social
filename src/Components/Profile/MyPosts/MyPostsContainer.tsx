import {  UpdateNewPostTextActionCreactor, AddPostActionCreator, ActionType } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';
import { AppStateType } from '../../../redux/redux-store';



const mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
};

const mapDispatchToPorps = (dispatch: (action:ActionType) => void) => {
    return { 
        addPost: () => {
            let action = AddPostActionCreator();
            dispatch(action);
        },
        updateNewPostText: (text: string) => {
            let action = UpdateNewPostTextActionCreactor(text);
            dispatch(action);
        }
    }
};

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToPorps)(MyPosts);

