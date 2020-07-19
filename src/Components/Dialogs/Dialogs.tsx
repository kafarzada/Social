import React, { ChangeEvent } from 'react';
import classes from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {  StoreType } from '../../redux/state';
import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from '../../redux/dialogs-reducer';

type PropsType = {
    store: StoreType
}

const Dialogs = (props:PropsType) => {

    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogs.map( item => {
        return <DialogItem name={item.name} id={item.id}/>
    })

    
    let messagesElements = state.messages.map(item => {
        return <Message id={item.id} message={item.message}/>
    })
    let newMessageBody = state.newMessageBody

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator())
    }

    let onNewMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyActionCreator(body))
        debugger
    }

    // =======================JSX==============================
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>

                <div className={classes.messageItems}>
                    {messagesElements}
                </div>

                <div className={classes.newMessage}>

                <textarea value={newMessageBody} onChange={onNewMessageChange} placeholder={"Сообщение..."}></textarea>
                    <div><button onClick={ onSendMessageClick } >Отправить</button></div>
               
                </div>

            </div>
        </div>
    )

    // =======================JSX==============================
}

export default Dialogs;