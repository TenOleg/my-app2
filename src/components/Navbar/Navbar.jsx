import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    let state = props.sidebar;

    let blockElement = state.sideFriendBlock.map(s => <div key={s.id}>{s.name}</div>)
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to={'/profile'} activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/dialogs'} activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/users'} activeClassName={s.activeLink}>Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/news'} activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/music'} activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/settings'} activeClassName={s.activeLink}>Settings</NavLink>
            </div>
            <div>
                <div className={s.block}>
                    <h3>Friends</h3>
                </div>
                <div className={s.block}>
                    {blockElement}
                </div>

            </div>
        </nav>
    );
}

export default Navbar;