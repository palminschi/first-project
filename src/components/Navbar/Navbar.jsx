import React from "react";
import classes from './Navbar.module.css';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
     <nav className={classes.nav}>
        <div className={classes.item}>
          <NavLink to='/profile' activeClassName={classes.active} className={classes.navlink}>Profile</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to='/dialogs' activeClassName={classes.active} className={classes.navlink} >Messages</NavLink>
        </div>
        <div className={classes.item}>
         <NavLink to='/news' activeClassName={classes.active} className={classes.navlink} >News</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to='/music' activeClassName={classes.active} className={classes.navlink}>Music</NavLink>
        </div>
        <div className={classes.item}>
         <NavLink to='/settings' activeClassName={classes.active} className={classes.navlink}>Settings</NavLink>
        </div>
      </nav>
    )
}

export default Navbar;