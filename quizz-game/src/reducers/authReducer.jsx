import * as types from "../constants/contants";
const initialState = {
  token: localStorage.getItem("token"),
  isLoggedIn: !!localStorage.getItem("token"),
  role: JSON.parse(localStorage.getItem("role")),
  error: null,
};

const authReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case types.LOGIN_SUCCESS:
    case types.REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        token: action.payload.token,
        role: action.payload.roles,
        error: null,
      };
    case types.LOGIN_FAILURE:
    case types.REGISTER_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        token: null,
        role: null,
        error: action.payload,
      };
    case types.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        role: null,
        token: null,
      };

    default:
      return state;
  }
};

export default authReducer;
