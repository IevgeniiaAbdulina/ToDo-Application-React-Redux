import { combineReducers } from "redux";
import postReducer from "./postReducer";
import authReducer from "./authReducer";
import getReducer from "./getReducer";

export default combineReducers({
  tasks: postReducer,
  auth: authReducer,
  lists: getReducer
});
