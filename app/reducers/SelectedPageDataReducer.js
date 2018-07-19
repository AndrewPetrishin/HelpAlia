import { REDUX_ACTION_SET_CURRENT_PAGE, GET_PAGE_DATA } from "../components/Helper";

export default (state = GET_PAGE_DATA('HomeScreen'), action) => {
    // debugger; 
    console.log('Acces to action = ' + action.type + '  payload =' + action.payload);
    if(action.type === REDUX_ACTION_SET_CURRENT_PAGE){
        return action.payload || state;
    }
    return state;
};