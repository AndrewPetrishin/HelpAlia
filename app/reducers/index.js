import { combineReducers } from 'redux';
import UserDataReducer from './UserDataReducer';
import SelectedPageDataReducer from './SelectedPageDataReducer';

export default combineReducers({
    currentPage: SelectedPageDataReducer, 
    user: UserDataReducer}
);