import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
      <div className={classes.myposts}>
        <div className={classes.newpost}>
          <textarea className={classes.text}></textarea>
          <button className={classes.button}>Add post</button>
        </div>
        <div className={classes.posts}>
          <Post like="15" message="Hi, how are you?"/>
          <Post like="21" message="It's my first message"/>
          <Post like="6" message="Hello!"/>
        </div>
      </div>
    )}

export default MyPosts;