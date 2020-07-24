import { ProfilePageType, PostType  } from './state';
import { v1 } from 'uuid';
import { updateNewMessageBodyActionType, sendMessageActionType } from './dialogs-reducer';

let initialState: ProfilePageType = {
    newPostText: "",
    posts: [
        {id: v1(), message: "It\'s my first post", likesCount: 1},
        {id: v1(), message: "Hi, How are You?", likesCount: 12},
        {id: v1(), message: "Blabla", likesCount: 100},
        {id: v1(), message: "Dada", likesCount: 12}
    ]
};

type updateNewpostTextActionType = {
    type: 'UPDATE_NEWPOST_TEXT'
    newText: string
}

type addPostActionType = {
    type: 'ADD_POST' 
}

export type  ActionType = updateNewpostTextActionType |
                            addPostActionType | 
                            updateNewMessageBodyActionType |
                            sendMessageActionType;

const profileReducer = (state: ProfilePageType = initialState,action: ActionType) => {
    switch (action.type) {
        case "ADD_POST":
            const newPost:PostType = {id: v1(), message: state.newPostText, likesCount:0};
            state.posts.push(newPost);
            state.newPostText = '';
            return state
        case "UPDATE_NEWPOST_TEXT":
            state.newPostText = action.newText;
            return state
        default: 
            return state
    }
}

export const UpdateNewPostTextActionCreactor = (newText: string):updateNewpostTextActionType => {
    return {
        type: 'UPDATE_NEWPOST_TEXT',
        newText: newText
    }
}

export const AddPostActionCreator = ():addPostActionType => {
    return {
        type: 'ADD_POST'
    }
}

export default profileReducer;