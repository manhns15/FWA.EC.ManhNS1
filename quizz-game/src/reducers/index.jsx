import { combineReducers } from "redux";
import authReducer from "./authReducer";
import {
  questionPlayReducer,
  questionSubmitedReducer,
  questionsReducer,
} from "./questionReducer";
import { profileAvtReducer, profileReducer } from "./profileReducer";

const rootReducer = combineReducers({
  // Them cac reducer vao day va config
  auth: authReducer,
  questions: questionsReducer,
  questionsPlay: questionPlayReducer,
  questionSubmited: questionSubmitedReducer,
  profile: profileReducer,
  profileAvt: profileAvtReducer,
});

export default rootReducer;
