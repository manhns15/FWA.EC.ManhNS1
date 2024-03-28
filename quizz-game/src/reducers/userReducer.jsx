import * as types from "../constants/contants";

const initialStateUser = {
  users: [],
  loading: false,
  error: null,
};
const usersReducer = (state = initialStateUser, action) => {
  console.log(action);
  switch (action.type) {
    case types.FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: null,
      };
    case types.FETCH_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export { usersReducer };
