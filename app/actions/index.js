import { REDUX_ACTION_SET_CURRENT_PAGE } from "../components/Helper";

export const setCurrentPage = (page) => {
    console.log('Enter to action with page=' + page);
    return {
        type: REDUX_ACTION_SET_CURRENT_PAGE,
        payload: page
    }
};