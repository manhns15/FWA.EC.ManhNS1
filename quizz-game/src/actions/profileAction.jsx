import { fetchProfile, uploadAvatar } from "../services/profileService";
import * as types from "../constants/contants";

const fetchProfileAction = (token) => {
  return async (dispatch) => {
    dispatch({
      type: types.FETCH_FROFILE_REQUEST,
    });
    try {
      const data = await fetchProfile(token);
      dispatch({
        type: types.FETCH_FROFILE_SUCCESS,
        payload: data.data,
      });
    } catch (error) {
      dispatch({
        type: types.FETCH_FROFILE_FAILURE,
        payload: error.message,
      });
    }
  };
};
const uploadAvatarAction = (token, file) => {
  return async (dispatch) => {
    try {
      const response = await uploadAvatar(token, file);

      if (response.statusCode === 200) {
        const userData = JSON.parse(localStorage.getItem("userData"));
        userData.avatar_link = response.data;
        localStorage.setItem("userData", JSON.stringify(userData));
        dispatch({
          type: types.UPLOAD_AVATAR_SUCCESS,
          payload: response.data,
        });
      } else {
        dispatch({
          type: types.UPLOAD_AVATAR_FAILURE,
          payload: response.message,
        });
      }
    } catch (error) {
      console.error("Upload avatar error:", error);
      dispatch({
        type: "UPLOAD_AVATAR_FAILURE",
        payload: "Upload avatar failed",
      });
    }
  };
};

export { fetchProfileAction, uploadAvatarAction };
