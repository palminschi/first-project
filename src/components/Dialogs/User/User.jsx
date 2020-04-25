import React from "react";
import classes from './User.module.css';
import { NavLink } from "react-router-dom";

const User = (props) => {
    return (
        <div>
            <NavLink to={'/dialogs/'+ props.id} className={classes.user}>
                <img className={classes.img} src='https://cdn4.iconfinder.com/data/icons/user-icons-5/100/user-14-512.png'/>
                <div className={classes.name}>{props.name}</div>
            </NavLink>
        </div>
    )
}

export default User;