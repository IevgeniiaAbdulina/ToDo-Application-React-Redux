import { FETCH_TASKS, NEW_TASK } from "./types";

import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://cc19todoapp.herokuapp.com",
  headers: {
    "x-auth-token":
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTJmMTRmZjcyZWY5ZjAwMTcyNDZkMTkiLCJsb2dpbiI6IkphbmUiLCJlbWFpbCI6InNvbWVAY29tLmNvbSIsImlhdCI6MTU4MzE4MjEyNH0.wdVf9ZhmMGoCAPFWfQHi6STTWLZ0NKR4cwdmx_Mj2iM"
  }
});

export const fetchTasks = () => dispatch => {
  console.log("fetchTasks called here");
  axiosInstance
    .get("/api/tasks")
    .then(tasks =>
      dispatch({
        type: FETCH_TASKS,
        payload: tasks
      })
    )
    .catch(err => {
      console.log(err);
    });
};

export const createTask = taskData => dispatch => {
  console.log("createTask called here");
  console.log("taskData: ", taskData);

  axiosInstance
    .post("/api/tasks")
    .then(task =>
      dispatch({
        type: NEW_TASK,
        payload: task
      })
    )
    .catch(err => {
      console.log(err);
    });
};
