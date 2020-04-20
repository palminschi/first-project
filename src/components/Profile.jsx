import React from "react";
import classes from './Profile.module.css';

const Profile = () => {
    return (
    <div className={classes.content}>
        <img className={classes.image} src="https://htmlcolorcodes.com/assets/images/html-color-codes-color-tutorials-hero-00e10b1f.jpg"/>
        <div className={classes.avadescr}>
          <img className={classes.avatar} src="https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg"/>
          <div>Description</div>
        </div>
        <div className={classes.newpost}>
          New post
        </div>
        <div className={classes.posts}>
          <div className={classes.item}>post 1</div>
          <div className={classes.item}>post 2</div>
        </div>
      </div>
    )}

export default Profile;