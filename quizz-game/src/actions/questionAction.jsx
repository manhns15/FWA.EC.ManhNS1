import * as types from "../constants/contants";
import {
  fetchQuestionsPlay,
  submitQuestions,
} from "../services/questionService";

const fetchQuestionsPlayAction = (token, totalQuestion) => {
  return async (dispatch) => {
    dispatch({
      type: types.FETCH_QUESTIONS_PLAY_REQUEST,
    });
    try {
      const data = await fetchQuestionsPlay(token, totalQuestion);
      dispatch({
        type: types.FETCH_QUESTIONS_PLAY_SUCCESS,
        payload: data.data,
      });
    } catch (error) {
      dispatch({
        type: types.FETCH_QUESTIONS_PLAY_FAILURE,
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
      const listQuestionChecked = data.data;
      sessionStorage.setItem(
        "listQuestionChecked",
        JSON.stringify(listQuestionChecked)
      );
    } catch (error) {
      dispatch({
        type: types.SUBMIT_QUESTIONS_FAILURE,
        payload: error.message,
      });
    }
  };
};

export { fetchQuestionsPlayAction, submitQuestionsAction };
