import * as types from "../constants/contants";

const initialStatePlay = {
  questionPlay: [],
  loading: false,
  error: null,
};
const initialStateSumited = {
  listQuestionChecked: [],
  loading: false,
  error: null,
};
const initialStateQuestion = {
  questions: [],
  loading: false,
  error: null,
};

// const initialStateQuestion

const questionPlayReducer = (state = initialStatePlay, action) => {
  switch (action.type) {
    case types.FETCH_QUESTIONS_PLAY_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.FETCH_QUESTIONS_PLAY_SUCCESS:
      return {
        ...state,
        loading: false,
        questionPlay: action.payload,
        error: null,
      };
    case types.FETCH_QUESTIONS_PLAY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const questionSubmitedReducer = (state = initialStateSumited, action) => {
  switch (action.type) {
    case types.SUBMIT_QUESTIONS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.SUBMIT_QUESTIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        listQuestionChecked: action.payload,
        error: null,
      };
    case types.SUBMIT_QUESTIONS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const questionsReducer = (state = initialStateQuestion, action) => {
  console.log(action);
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
export { questionPlayReducer, questionSubmitedReducer, questionsReducer };
