import React from "react";
import classes from './Header.module.css';


const Header = () => {
    return (
        <header className={classes.header}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Steam_Logo.png"/>
        <h1>Title Social Network</h1>
        </header>
    )
}

export default Header;