import {DialogPageType } from './state';
import { v1 } from 'uuid';

let initialState = {
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
};

const dialogReducer = (state: DialogPageType = initialState, action:any) => {

    return state
}

export default dialogReducer;