import React from "react";
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {
    return (
    <div className={classes.content}>
        <img className={classes.image} src="https://i2.wp.com/allsecuresafe.com/wp-content/uploads/2017/03/recycled_texture_background_by_sandeep_m-d6aeau9_PZ9chud.jpg?ssl=1"/>
        <div className={classes.ava_descr}>
          <img className={classes.avatar} src="https://cdn4.iconfinder.com/data/icons/user-icons-5/100/user-14-512.png"/>
          <div className={classes.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>
        </div>
        <MyPosts 
          dataPosts={props.profilePage.dataPosts}
          newPostText={props.profilePage.newPostText}
          dispatch={props.dispatch}/>
      </div>
    )}

export default Profile;