import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {
  let elementPost = props.profilePage.dataPosts.map( post => <Post like={post.like} message={post.message}/> )
    return (
      <div className={classes.myposts}>
        <div className={classes.newpost}>
          <textarea className={classes.text}></textarea>
          <button className={classes.button}>Add post</button>
        </div>
        <div className={classes.posts}>
          {elementPost}
        </div>
      </div>
    )}

export default MyPosts;