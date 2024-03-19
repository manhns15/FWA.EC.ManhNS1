import { combineReducers } from "redux";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  // Them cac reducer vao day va config
  auth: authReducer,
});

export default rootReducer;
