import axios from "axios";
import { key } from "../../api_key";

export const LOAD_DATA = "LOAD_DATA";
export const USER_REQUEST = "USER_REQUEST";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILED = "GET_USER_SUCCESS";


export const loadData = () => {
    return async (dispatch) => {
        try {
            dispatch({
                type: USER_REQUEST
            })

            const data = await axios.get(`https://newsapi.org/v2/everything?q=tesla&from=2021-05-06&sortBy=publishedAt&apiKey=${key}`);

            dispatch({
                type: GET_USER_SUCCESS,
                payload: data.data
            })

        } catch (error) {
            dispatch({
                type: GET_USER_FAILED,
                payload: error.message
            })
        }
    }
}