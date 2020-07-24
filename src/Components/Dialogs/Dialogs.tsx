import React, { ChangeEvent } from 'react';
import classes from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import { DialogPageType } from '../../redux/state';

type PropsType = {
    sendMessage: () => void
    updateNewMessageBody:(body: string) => void
    dialogsPage: DialogPageType
}

const Dialogs = (props:PropsType) => {


    let dialogsElements = props.dialogsPage.dialogs.map( item => {
        return <DialogItem name={item.name} id={item.id}/>
    })

    
    let messagesElements = props.dialogsPage.messages.map(item => {
        return <Message id={item.id} message={item.message}/>
    })
    let newMessageBody = props.dialogsPage.newMessageBody

    let onSendMessageClick = () => {
        props.sendMessage()
    }

    let onNewMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
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