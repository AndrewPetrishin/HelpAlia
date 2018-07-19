import { REDUX_ACTION_SET_CURRENT_PAGE, GET_PAGE_DATA } from "../components/Helper";

export const setCurrentPage = (page) => {
    return {
        type: REDUX_ACTION_SET_CURRENT_PAGE,
        payload: GET_PAGE_DATA(page)
    }
};