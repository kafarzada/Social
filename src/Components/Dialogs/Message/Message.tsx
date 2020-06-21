import React from 'react';
import classes from './Message.module.css';
import {MessageType} from "./../../../redux/state"


const Message = (props:MessageType) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}


export default Message;