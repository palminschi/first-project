import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";

let store = {
    _state : {
        profilePage : {
            dataPosts : [
                {id:1,like:"15",message:"Hi, how are you?"},
                {id:2,like:"21",message:"It's my first message"},
                {id:3,like:"6",message:"Hello!"}
            ],
            newPostText : ""
        },
        
        dialogsPage : {
            dataUsers : [
            {id: 1, name:'Mihai'},
            {id: 2, name:'Liduta'},
            {id: 3, name:'Petrea'},
            ],
            dataMyMessages : [
            {id: 1, message:"Hello!"},
            {id: 2, message:"Hallo!"},
            {id: 3, message:"Privet!"},
            {id: 4, message:"Noroc!"}
            ],
            dataFriendMessages : [
            {id: 1, message:"Guten Tag!"},
            {id: 2, message:"Welcome!"}
            ],
            newMessage : ""
            }
    },
    _callSubscriber() {},
    getState(){
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch (action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        
        this._callSubscriber(this._state)
    }
    
    
}

export default store;







