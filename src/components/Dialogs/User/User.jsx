import React from "react";
import classes from './User.module.css';
import { NavLink } from "react-router-dom";

const User = (props) => {
    return (
        <div>
            <NavLink to={'/dialogs/'+ props.id} className={classes.user}>
                <img className={classes.img} src='https://www.meme-arsenal.com/memes/7bdea6754f999b50e9577596f09197fb.jpg'/>
                <div className={classes.name}>{props.name}</div>
            </NavLink>
        </div>
    )
}

export default User;