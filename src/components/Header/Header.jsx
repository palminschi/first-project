import React from "react";
import classes from './Header.module.css';


const Header = () => {
    return (
        <header className={classes.header}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Wikinews-logo.png"/>
        <h1>Social Network</h1>
        </header>
    )
}

export default Header;