import { GET_USER_FAILED, GET_USER_SUCCESS, USER_REQUEST } from "../Actions/Actions";

const initialData = {
    loading: false,
    data: [],
    error: ''
}

export const dataReducer = (state = initialData, action) => {
    
    switch(action.type){
        case USER_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case GET_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case GET_USER_FAILED:
            return {
                ...state,
                loading: true,
                data: [],
                error: action.payload
            }

        default:
            return state;
    }
}