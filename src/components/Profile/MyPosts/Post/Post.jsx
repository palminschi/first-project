import React from "react";
import classes from './Post.module.css';

const Post = (props) => {
    return (
      <div className={classes.item}>
        <img className={classes.item_ava} src="https://cdn4.iconfinder.com/data/icons/user-icons-5/100/user-14-512.png"/>
        <div className={classes.item_text}>
          {props.message}
          <div className={classes.like}>
            {props.like} like 
          </div>
        </div>
      </div>
      )}

export default Post;