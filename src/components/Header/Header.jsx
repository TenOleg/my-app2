import React from 'react';
import h from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={h.header}>
            <img src={'https://www.upsocialnetwork.com/wp-content/uploads/2019/11/upsocial-logo1.png'}/>

            <div className={h.loginBlock}>
                {props.isAuth ? <div>{props.login} --- <button onClick={props.logout}>Logout</button></div>
                   : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    );
}

export default Header;