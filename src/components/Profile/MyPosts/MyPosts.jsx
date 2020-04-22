import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

let dataPosts = [
  {id:1,like:"15",message:"Hi, how are you?"},
  {id:2,like:"21",message:"It's my first message"},
  {id:3,like:"6",message:"Hello!"}
];

let elementPost = dataPosts.map( post => <Post like={post.like} message={post.message}/> )

const MyPosts = () => {
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