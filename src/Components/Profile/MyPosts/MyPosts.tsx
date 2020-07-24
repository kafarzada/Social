import React, { ChangeEvent } from 'react';
import classes from "./MyPosts.module.css";
import Post from './Post/Post';
import { PostType } from '../../../redux/state';

type MyPostType = {
    updateNewPostText: (text: string) => void
    addPost: () => void
    posts: Array<PostType>
    newPostText: string
}

const MyPosts = (props: MyPostType) => {
    let postsElement = props.posts.map( p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/> )
    const onAddPost = () => { props.addPost() }

    const onPostChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value;
        props.updateNewPostText(text)
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My Post</h3>
            <div>
                <div>
                    <textarea 
                        onChange={onPostChange}
                        value={props.newPostText}
                        className={classes.newPostTextarea}
                        placeholder="Новый пост"/>
                </div>
                <div>
                    <button onClick={ onAddPost }>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts;