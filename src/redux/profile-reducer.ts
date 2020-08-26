import { ProfilePageType, PostType, ProfileType  } from './state';
import { v1 } from 'uuid';
import { updateNewMessageBodyActionType, sendMessageActionType } from './dialogs-reducer';

let initialState: ProfilePageType = {
    newPostText: "",
    posts: [

    ],
    profile: {
        id:'',
        lookingForAJob:false,
        lookingForAJobDescription:'',
        fullName: '',
        contacts: {
            gitHub:'',
            vk: '',
            instagram:'',
            facebook:'',
            twitter:'',
            youtube:'',
            mainLink:'',
            website:''
        },
        photos: {
            small:'',
            large:'',
        }

    }
};

type updateNewpostTextActionType = {
    type: 'UPDATE_NEWPOST_TEXT'
    newText: string
}

type addPostActionType = {
    type: 'ADD_POST' 
}

type setUserProfileType = {
    type: 'SET_USER_PROFILE'
    profile: ProfileType
}

export type  ActionType = updateNewpostTextActionType |
                            addPostActionType | 
                            updateNewMessageBodyActionType |
                            sendMessageActionType |
                            setUserProfileType ;

const profileReducer = (state: ProfilePageType = initialState,action: ActionType) => {
    switch (action.type) {
        case "ADD_POST": 
            const newPost:PostType = {id: v1(), message: state.newPostText, likesCount:0};
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        case "UPDATE_NEWPOST_TEXT": 
            return {
                ...state,
                newPostText: action.newText
            }
        case 'SET_USER_PROFILE':
            return {
                ...state,
                profile: action.profile
            }
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

export const setUserProfileActionCreator = (profile: ProfileType):setUserProfileType => {
    return {
        type: 'SET_USER_PROFILE',
        profile: profile
    }
}

export default profileReducer;