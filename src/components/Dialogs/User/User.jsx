import React from "react";
import classes from './User.module.css';
import { NavLink } from "react-router-dom";

const User = (props) => {
    return (
        <div>
            <NavLink to={'/dialogs/'+ props.id}>{props.name}</NavLink>
        </div>
    )
}

export default User;