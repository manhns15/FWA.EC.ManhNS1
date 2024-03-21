import * as types from "../constants/contants";
import { fetchQuestions, submitQuestions } from "../services/questionService";

const fetchQuestionsAction = (token, totalQuestion) => {
  return async (dispatch) => {
    dispatch({
      type: types.FETCH_QUESTIONS_REQUEST,
    });
    try {
      const data = await fetchQuestions(token, totalQuestion);
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

const submitQuestionsAction = (token, listQuestionSubmitted) => {
  return async (dispatch) => {
    dispatch({
      type: types.SUBMIT_QUESTIONS_REQUEST,
    });
    try {
      const data = await submitQuestions(token, listQuestionSubmitted);
      dispatch({
        type: types.SUBMIT_QUESTIONS_SUCCESS,
        payload: data.data,
      });
      console.log("data", data);
    } catch (error) {
      dispatch({
        type: types.SUBMIT_QUESTIONS_FAILURE,
        payload: error.message,
      });
    }
  };
};

export { fetchQuestionsAction, submitQuestionsAction };
