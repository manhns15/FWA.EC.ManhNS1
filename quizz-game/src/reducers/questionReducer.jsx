import * as types from "../constants/contants";

const initialState = {
  questions: [],
  loading: false,
  error: null,
};

const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_QUESTIONS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.FETCH_QUESTIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        questions: action.payload,
        error: null,
      };
    case types.FETCH_QUESTIONS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default questionReducer;
