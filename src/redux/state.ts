import {v1} from 'uuid';
import profileReducer, { ActionType } from './profile-reducer';
import dialogReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

export type StoreType = {
    _state: RootStateType
    subscribe:(observer:()=>void) => void
    _callSubscriber: (state: RootStateType) => void
    getState: () => RootStateType
    dispatch: (action: ActionType) => void
}





export let store: StoreType = {
     _state: {
        profilePage: {
            newPostText: "",
            posts: [
                {id: v1(), message: "It\'s my first post", likesCount: 1},
                {id: v1(), message: "Hi, How are You?", likesCount: 12},
                {id: v1(), message: "Blabla", likesCount: 100},
                {id: v1(), message: "Dada", likesCount: 12}
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
        },
    
        dialogsPage: {
            dialogs: [
                {id: v1(), name: "Dimych"},
                {id: v1(), name: "Sveta"},
                {id: v1(), name: "Andrey"},
                {id: v1(), name: "Sasha"},
                {id: v1(), name: "Victor"},
                {id: v1(), name: "Valera"}
            ],
    
            messages: [
                {id: v1(), message: "Hi"},
                {id: v1(), message: "How is your it-komosutra?"},
                {id: v1(), message: "Yo"},
                {id: v1(), message: "Yo"},
                {id: v1(), message: "Yo"},
            ],
            newMessageBody: ''
        },

        sidebar: {}
    
    },

    getState() {
        return this._state
    },
    subscribe(observer:()=>void){ // наблюдатель observer
        this._callSubscriber = observer;
    },
    _callSubscriber(state: RootStateType){
        console.log('State is changed');
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)
    }
    
}


export type MessageType = {
    id: string,
    message: string
}

export type DialogType = {
    id: string,
    name: string
}

export type PostType = {
    id: string,
    message: string,
    likesCount: number
}

type ContactsType = {
    gitHub: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

type PhotosType = {
    small: string
    large: string
}

export type ProfileType = {
    id: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType 
}

export type ProfilePageType = {
    posts: Array<PostType>,
    newPostText:string
    profile: ProfileType 
}

 export  type DialogPageType = {
    dialogs: Array<DialogType>,
    messages: Array<MessageType>,
    newMessageBody: string
}

export type SidebarType = {}


export type RootStateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogPageType,
    sidebar: SidebarType
}
