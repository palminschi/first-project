const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    dataPosts : [
        {id:1,like:"15",message:"Hi, how are you?"},
        {id:2,like:"21",message:"It's my first message"},
        {id:3,like:"6",message:"Hello!"}
    ],
    newPostText : ""
};

const profileReducer = (state = initialState , action) => {
    switch(action.type) {
        case ADD_POST: 
            let newPost = {
                id:5,
                message: state.newPostText,
                like: 0
            }
            state.dataPosts.push(newPost)
            state.newPostText = ""
            return state
        case UPDATE_NEW_POST_TEXT: 
            state.newPostText = action.text
            return state
        default:
            return state
    }
}
export const addPostActionCreator = () => ({type: ADD_POST})
  
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, text: text})
    
  


export default profileReducer;