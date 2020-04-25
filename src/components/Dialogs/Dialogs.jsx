import React from "react";
import classes from './Dialogs.module.css';
import User from "./User/User";
import Messages from "./Messages/Messages";
import {addMessageActionCreator, updateNewMessageActionCreator} from '../../state/dialogs_reducer';

const Dialogs = (props) => {
    let elementsUsers = props.data.dataUsers.map( (user) => <User id={user.id} name={user.name}/>);
    let elementsMyMessages = props.data.dataMyMessages.map ( mess => <Messages id={mess.id} myMessage={mess.message}/>);
    let elementsFriendsMessages = props.data.dataFriendMessages.map( mess => <Messages id={mess.id} youMessage={mess.message}/>);

    let addMessage = () => {
        props.dispatch(addMessageActionCreator())
    }
    let onMessageChange = (event) => {
        let message = event.target.value
        props.dispatch(updateNewMessageActionCreator(message))
    }
    


    return (
        <div className={classes.content}>
            <div className={classes.users}>
                {elementsUsers}
            </div>
            <div className={classes.messages}>
                <div className={classes.dialogs}>    
                    <div className={classes.you}>{elementsFriendsMessages}</div>
                    <div className={classes.my}>{elementsMyMessages}</div>
                </div>
                <div className={classes.text_input}>
                    <textarea 
                        className={classes.textarea}
                        onChange={onMessageChange}
                        value={props.data.newMessage}
                        placeholder="Enter your message"/>
                    
                    <button onClick={addMessage} 
                        className={classes.btn_send}>Send</button>
                </div>
            </div>
            
        </div>
    )
}

export default Dialogs;