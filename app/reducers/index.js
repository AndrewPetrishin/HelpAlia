import { combineReducers } from 'redux';
import UserDataReducer from './UserDataReducer';

export default combineReducers({
    user: UserDataReducer
});