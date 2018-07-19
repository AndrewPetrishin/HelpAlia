import { REDUX_ACTION_SET_CURRENT_PAGE, PAGE_NAME_RSS } from "../components/Helper";

export default (state = PAGE_NAME_RSS, action) => {
    // debugger; 
    // console.log('Acces to action = ' + action.type + '  payload =' + action.payload);
    if(action.type === REDUX_ACTION_SET_CURRENT_PAGE){
        return action.payload
    }
    return state;
};