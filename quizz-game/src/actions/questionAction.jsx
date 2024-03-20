import * as types from "../constants/contants";
import fetchQuestions from "../services/questionService";

const fetchQuestionsAction = (token) => {
  return async (dispatch) => {
    dispatch({
      type: types.FETCH_QUESTIONS_REQUEST,
    });
    try {
      const data = await fetchQuestions(token);
      dispatch({
        type: types.FETCH_QUESTIONS_SUCCESS,
        payload: data.data,
      });
    } catch (error) {
      dispatch({
        type: types.FETCH_QUESTIONS_FAILURE,
        payload: error.message,
      });
    }
  };
};

export { fetchQuestionsAction };
