import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../state/profile_reducer";


const MyPosts = (props) => {
  let elementPost = props.profilePage.dataPosts.map( post => <Post like={post.like} message={post.message}/> )

  let newPost = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator())
    };

  let onPostChange = () => {
    let text = newPost.current.value;
    props.dispatch(updateNewPostTextActionCreator(text));
  }

    return (
      <div className={classes.myposts}>
        <div className={classes.newpost}>
          <textarea 
            ref={newPost} 
            className={classes.text} 
            onChange={onPostChange} 
            value={props.profilePage.newPostText}/>
          <button onClick={addPost} className={classes.button}>Add post</button>
        </div>
        <div className={classes.posts}>
          {elementPost}
        </div>
      </div>
    )}

export default MyPosts;