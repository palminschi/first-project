import React from "react";
import classes from './Messages.module.css';

const Messages = (props) => {
    return (
        <div className={classes.content}>
          <div className={classes.my}>{props.myMessage}</div>
          <div className={classes.you}>{props.youMessage}</div>
        </div> 
    )
}

export default Messages;