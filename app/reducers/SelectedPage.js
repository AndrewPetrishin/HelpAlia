import { REDUX_ACTION_SET_CURRENT_PAGE } from "../components/Helper";

export default (state, action) => { 
    console.log('Acces to action = ' + action.type + '  payload =' + action.payload);
    if(action && action === REDUX_ACTION_SET_CURRENT_PAGE){
        return action.payload
    }
    return "HomeScreen";
};