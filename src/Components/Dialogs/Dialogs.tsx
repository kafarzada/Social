import React from 'react';
import classes from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import { DialogPageType } from '../../redux/state';

type PropsType = {
    dialogs: DialogPageType
}

const Dialogs = (props:PropsType) => {



    let dialogsElements = props.dialogs.dialogs.map( item => {
        return <DialogItem name={item.name} id={item.id}/>
    })

    
    let messagesElements = props.dialogs.messages.map(item => {
        return <Message id={item.id} message={item.message}/>
    })

    let postMessageRef = React.createRef<HTMLTextAreaElement>();






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

                    <textarea ref={postMessageRef} placeholder={"Сообщение..."}></textarea>
                    <div><button>Отправить</button></div>
               
                </div>

            </div>
        </div>
    )

    // =======================JSX==============================
}

export default Dialogs;