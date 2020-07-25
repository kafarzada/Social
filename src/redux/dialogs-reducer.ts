import {DialogPageType } from './state';
import { v1 } from 'uuid';
import { ActionType } from './profile-reducer';

let initialState:DialogPageType = {
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
};



const dialogReducer = (state: DialogPageType = initialState, action:ActionType) => {


    switch (action.type) { 
        case 'UPDATE_NEW_MESSAGE_BODY':
            return {
                ...state,
                newMessageBody: action.body
            }
        case 'SEND_MESSAGE': 
            let body = state.newMessageBody;
            return  {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: v1(), message: body}]
            }
        default:
            return state
    }
    
}



export type updateNewMessageBodyActionType = {
    type: 'UPDATE_NEW_MESSAGE_BODY'
    body: string
}

export type sendMessageActionType = {
    type: 'SEND_MESSAGE'
}

export const updateNewMessageBodyActionCreator = (newMessage: string):updateNewMessageBodyActionType => {
    return {
        type: 'UPDATE_NEW_MESSAGE_BODY',
        body: newMessage
    }
}

export const sendMessageActionCreator = ():sendMessageActionType => {
    return {
        type: 'SEND_MESSAGE'
    }
}

export default dialogReducer;