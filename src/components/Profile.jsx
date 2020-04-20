import React from "react";

const Profile = () => {
    return (
    <div className="content">
        <img id="content-image" src="https://htmlcolorcodes.com/assets/images/html-color-codes-color-tutorials-hero-00e10b1f.jpg"/>
        <div className="content__ava-descr">
          <img id="avatar" src="https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg"/>
          <div>Description</div>
        </div>
        <div className="content__newpost">
          New post
        </div>
        <div className="content__posts">
          <div>post 1</div>
          <div>post 2</div>
        </div>
      </div>
    )}

export default Profile;