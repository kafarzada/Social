import React, { ChangeEvent } from 'react';
import classes from "./MyPosts.module.css";
import Post from './Post/Post';
import { PostType } from '../../../redux/state';
type MyPostType = {
    posts : Array<PostType>
    addPost: () => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}

const MyPosts = (props: MyPostType) => {

  

    let postsElement =props.posts.map(p => {
        return <Post id={p.id} message={p.message} likesCount={p.likesCount}/>
    })

    const addPost = () => {
        props.addPost()
    }

    let onPostChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
            props.updateNewPostText(e.currentTarget.value);
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My Post</h3>
            <div>
                <div>
                    <textarea onChange={(e) => {onPostChange(e)}} value={props.newPostText} className={classes.newPostTextarea} placeholder="Новый пост"/>
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