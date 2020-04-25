import React from 'react';
import classes from './FriendsItem.module.css'

const FriendsItem = () => {
    return (
        <div className={classes.friends}>
            <img className={classes.img} src="https://cdn4.iconfinder.com/data/icons/user-icons-5/100/user-14-512.png"/>
            <div className={classes.name}>Name</div>
        </div>
    )
}

export default FriendsItem;