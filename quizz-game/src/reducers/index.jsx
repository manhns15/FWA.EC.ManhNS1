import { combineReducers } from "redux";
import authReducer from "./authReducer";
import questionReducer from "./questionReducer";

const rootReducer = combineReducers({
  // Them cac reducer vao day va config
  auth: authReducer,
  questions: questionReducer,
});

export default rootReducer;
