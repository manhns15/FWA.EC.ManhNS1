import { combineReducers } from "redux";
import authReducer from "./authReducer";
import {
  questionPlayReducer,
  questionSubmitedReducer,
  questionsReducer,
} from "./questionReducer";
import { profileAvtReducer, profileReducer } from "./profileReducer";
import { usersReducer } from "./userReducer";

const rootReducer = combineReducers({
  // Them cac reducer vao day va config
  auth: authReducer,
  questionsPlay: questionPlayReducer,
  questionSubmited: questionSubmitedReducer,
  questions: questionsReducer,
  profile: profileReducer,
  profileAvt: profileAvtReducer,
  users: usersReducer,
});

export default rootReducer;
