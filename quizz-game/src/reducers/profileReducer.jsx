import * as types from "../constants/contants";

const initialState = {
  profile: [],
  loading: false,
  error: null,
};
const initialAvtState = {
  avatar: null,
  error: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_FROFILE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.FETCH_FROFILE_SUCCESS:
      return {
        ...state,
        profile: action.payload,
        loading: false,
        error: null,
      };
    case types.FETCH_FROFILE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

const profileAvtReducer = (state = initialAvtState, action) => {
  switch (action.type) {
    case types.UPLOAD_AVATAR_SUCCESS:
      return {
        ...state,
        avatar: action.payload,
        error: null,
      };
    case types.UPLOAD_AVATAR_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export { profileReducer, profileAvtReducer };
