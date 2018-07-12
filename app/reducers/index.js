import { combineReducers } from 'redux';
import UserDataReducer from './UserDataReducer';
import SelectedPage from './SelectedPage';

export default combineReducers({
    currentPage: SelectedPage, 
    user: UserDataReducer}
);