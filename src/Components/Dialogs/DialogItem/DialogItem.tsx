import React from 'react';
import classes from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';




type DialogType = {
    id: string,
    name: string
};



const DialogItem = (props: DialogType) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <img className={classes.avatar} src="https://avatarko.ru/img/kartinka/1/avatarko_anonim.jpg" alt=""/>
            <NavLink className={classes.dialogItem} to={path}> {props.name} </NavLink>
        </div>
    )
}


export default DialogItem;