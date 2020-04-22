import React from "react";
import classes from './Dialogs.module.css';
import User from "./User/User";
import Messages from "./Messages/Messages";

{/* Data */}
let dataUsers = [
    {id: 1, name:'Mihai'},
    {id: 2, name:'Liduta'},
    {id: 3, name:'Petrea'},
]
let dataMessages = [
    {id: 1, message:"Hello!"},
    {id: 2, message:"Hallo!"},
    {id: 3, message:"Privet!"},
    {id: 4, message:"Noroc!"}
]
{/* .map( (parameter) => return { } ) */}
let elementsUsers = dataUsers.map( (user) => <User id={user.id} name={user.name}/>);
let elementsMessages = dataMessages.map ( mess => <Messages id={mess.id} message={mess.message}/>);


const Dialogs = () => {
    return (
        <div className={classes.content}>
            <div className={classes.users}>
                {elementsUsers}
            </div>
            <div className={classes.messages}>
                {elementsMessages}

                <div className={classes.text}>
                    <textarea></textarea>
                    <button>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;