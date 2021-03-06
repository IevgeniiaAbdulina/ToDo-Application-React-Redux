import { combineReducers } from "redux";
import listReducer from "./listReducer";
import taskReducer from "./taskReducer";
import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import { firestoreReducer } from "redux-firestore";

export default combineReducers({
  lists: listReducer,
  tasks: taskReducer,
  auth: authReducer,
  project: projectReducer,
  firestore: firestoreReducer
});
