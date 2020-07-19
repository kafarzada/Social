import React, { ChangeEvent } from 'react';
import classes from "./MyPosts.module.css";
import Post from './Post/Post';
import { PostType } from '../../../redux/state';
import { ActionType, UpdateNewPostTextActionCreactor, AddPostActionCreator } from '../../../redux/profile-reducer';
type MyPostType = {
    posts : Array<PostType>
    newPostText: string
    dispatch: (action: ActionType) => void
}

const MyPosts = (props: MyPostType) => {
    let postsElement =props.posts.map(p => {
        return <Post id={p.id} message={p.message} likesCount={p.likesCount}/>
    })

    const addPost = () => {
        props.dispatch(AddPostActionCreator())
    }

    let onPostChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value;
        let action = UpdateNewPostTextActionCreactor(text)
        props.dispatch(action);
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My Post</h3>
            <div>
                <div>
                    <textarea 
                        onChange={(e) => {onPostChange(e)}}
                        value={props.newPostText}
                        className={classes.newPostTextarea}
                        placeholder="Новый пост"/>
                </div>
                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts;