import {createStore, combineReducers} from 'redux'
import dialogsReducer from './dialogs_reducer';
import profileReducer from './profile_reducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
});

let store = createStore(reducers);

export default store;