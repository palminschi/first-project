import React from 'react';
import classes from './FriendsItem.module.css'

const FriendsItem = () => {
    return (
        <div className={classes.friends}>
            <img className={classes.img} src="https://www.meme-arsenal.com/memes/7bdea6754f999b50e9577596f09197fb.jpg"/>
            <div className={classes.name}>Mihai P.</div>
        </div>
    )
}

export default FriendsItem;