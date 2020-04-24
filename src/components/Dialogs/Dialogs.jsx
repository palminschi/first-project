import React from "react";
import classes from './Dialogs.module.css';
import User from "./User/User";
import Messages from "./Messages/Messages";

const Dialogs = (props) => {
    let elementsUsers = props.data.dataUsers.map( (user) => <User id={user.id} name={user.name}/>);
    let elementsMyMessages = props.data.dataMyMessages.map ( mess => <Messages id={mess.id} myMessage={mess.message}/>);
    let elementsFriendsMessages = props.data.dataFriendMessages.map( mess => <Messages id={mess.id} youMessage={mess.message}/>);

    return (
        <div className={classes.content}>
            <div className={classes.users}>
                {elementsUsers}
            </div>
            <div className={classes.messages}>
                {elementsMyMessages}
                {elementsFriendsMessages}
                <div className={classes.text}>
                    <textarea></textarea>
                    <button>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;