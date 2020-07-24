import dialogReducer, { updateNewMessageBodyActionCreator, sendMessageActionCreator } from './dialogs-reducer';
import { DialogPageType } from './state';
import { v1 } from 'uuid';


test('the current value of the message must be changed', () => {
    let startState:DialogPageType = {
        dialogs: [
            {id: v1(), name: "Dimych"},
        ],
    
        messages: [
            {id: v1(), message: "Hi"},
            {id: v1(), message: "How is your it-komosutra?"},
            {id: v1(), message: "Yo"},
        ],
        newMessageBody: ''
    };
    let newMessage = "Hello Vurgun";
    const action = updateNewMessageBodyActionCreator(newMessage);
    const endState = dialogReducer(startState, action);
    
    expect(endState.newMessageBody).toBe(newMessage);
});




test('one new message should be added to the message list', () => {
    let startState:DialogPageType = {
        dialogs: [
            {id: v1(), name: "Dimych"},
        ],
    
        messages: [
            {id: v1(), message: "Hi"},
        ],
        newMessageBody: ''
    };
    
    const action = sendMessageActionCreator();
    const endState = dialogReducer(startState, action);

    expect(endState.messages.length).toBe(2);
});