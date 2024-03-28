import * as types from "../constants/contants";
import { fetchUsers } from "../services/userService";

const fetchUsersAction = (token, page) => {
  return async (dispatch) => {
    dispatch({
      type: types.FETCH_USER_REQUEST,
    });
    try {
      const data = await fetchUsers(token, page);
      dispatch({
        type: types.FETCH_USER_SUCCESS,
        payload: data.data,
      });
      console.log("data", data);
    } catch (error) {
      dispatch({
        type: types.FETCH_USER_FAILURE,
        payload: error.message,
      });
    }
  };
};
export { fetchUsersAction };
