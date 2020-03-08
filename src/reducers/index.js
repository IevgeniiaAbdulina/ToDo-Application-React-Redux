import { combineReducers } from "redux";
import postReducer from "./postReducer";
import authReducer from "./authReducer";
import listReducer from "./listReducer";

export default combineReducers({
  tasks: postReducer,
  auth: authReducer,
  lists: listReducer
});
