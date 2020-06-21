import {v1} from 'uuid';

let renderTree = () => {
    console.log("state  changed")
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


 export type ProfilePageType = {
    posts: Array<PostType>,
    newPostText:string
}

 export  type DialogPageType = {
    dialogs: Array<DialogType>,
    messages: Array<MessageType>
}

 type SidebarType = {}


export type RootStateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogPageType,
}

let state: RootStateType  = {
    profilePage: {
        newPostText: "",
        posts: [
            {id: v1(), message: "It\'s my first post", likesCount: 1},
            {id: v1(), message: "Hi, How are You?", likesCount: 12},
            {id: v1(), message: "Blabla", likesCount: 100},
            {id: v1(), message: "Dada", likesCount: 12}
        ]
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
            
        ]
    },

}


export const addPost = () => {
    const newPost:PostType = {id: v1(), message: state.profilePage.newPostText, likesCount:0};
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    renderTree();
}


export const updateNewPostText = (newText:string) => {
    state.profilePage.newPostText = newText;
    renderTree();
}



type subScribeType = {
    observer: () => void
}
export const subscribe =(observer: subScribeType) => {
    renderTree = observer;
}


export default state;