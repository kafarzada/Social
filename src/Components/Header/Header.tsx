import React from 'react';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

type PropsType = {
    login: string,
    isAuth: boolean
}

const Header = (props: PropsType) => {
    return (
        <header className={classes.header}>
            <h3 className={classes.header__title}>Путь Самурая</h3>

            <div className={classes.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={"/auth"}>login</NavLink>}
            </div>
        </header>
    )
}
export default Header;