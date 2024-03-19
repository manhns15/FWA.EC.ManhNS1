import * as types from "../constants/contants";
import { loginService, registerService } from "../services/authService";

const login = (email, password) => {
  return async (dispatch) => {
    try {
      const data = await loginService(email, password);
      const token = data.data.tokens.access_token.access_token;
      const roles = data.data.user.roles;
      console.log("data", data);
      const userData = {
        avatar_link: data.data.user.avatar_link,
        name: data.data.user.name,
        email: data.data.user.email,
      };
      localStorage.setItem("userData", JSON.stringify(userData));
      localStorage.setItem("token", token);
      localStorage.setItem("role", JSON.stringify(roles));

      dispatch({
        type: types.LOGIN_SUCCESS,
        payload: {
          token: token,
          roles: roles,
        },
      });
    } catch (error) {
      dispatch({ type: types.LOGIN_FAILURE, payload: error.message });
    }
  };
};

const register = (email, name, password) => {
  return async (dispatch) => {
    try {
      const data = await registerService(email, name, password);
      console.log("data", data);
      dispatch({
        type: types.REGISTER_SUCCESS,
        payload: data.tokens.access_token.access_token,
      });
    } catch (error) {
      console.log("error", error);
      dispatch({ type: types.REGISTER_FAILURE, payload: error.message });
    }
  };
};
const logout = () => {
  localStorage.removeItem("userData");
  return { type: types.LOGOUT };
};

export { login, register, logout };
