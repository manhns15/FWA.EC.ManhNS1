import { combineReducers } from "redux";
import authReducer from "./authReducer";
import { questionReducer, questionSubmitedReducer } from "./questionReducer";

const rootReducer = combineReducers({
  // Them cac reducer vao day va config
  auth: authReducer,
  questions: questionReducer,
  questionSubmited: questionSubmitedReducer,
});

export default rootReducer;
