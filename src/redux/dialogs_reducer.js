const ADD_MESSAGE = 'ADD_MESSAGE'
const UPDATE_NEW_MESSAGE = 'UPDATE_NEW_MESSAGE'

let initialState = {
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

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_MESSAGE: 
            let newAddMessage = {
                id: 6,
                message: state.newMessage
            }
            state.dataMyMessages.push(newAddMessage)
            state.newMessage = ""
            return state
        case UPDATE_NEW_MESSAGE:
            state.newMessage = action.message
            return state
        default:
            return state
    }
}

export const addMessageActionCreator = () => {
    return { type : ADD_MESSAGE }
}
export const updateNewMessageActionCreator = (message) => {
    return {
        type: UPDATE_NEW_MESSAGE, message: message
    }
}

export default dialogsReducer;