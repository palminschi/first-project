const ADD_MESSAGE = 'ADD_MESSAGE'
const UPDATE_NEW_MESSAGE = 'UPDATE_NEW_MESSAGE'

const dialogsReducer = (state, action) => {
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