import { combineReducers } from "redux";
import listReducer from "./listReducer";
import taskReducer from "./taskReducer";
import authReducer from "./authReducer";

export default combineReducers({
  lists: listReducer,
  tasks: taskReducer,
  auth: authReducer
});
