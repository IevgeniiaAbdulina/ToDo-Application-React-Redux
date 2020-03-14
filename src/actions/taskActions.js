import { FETCH_TASKS, NEW_TASK, DELETE_TASK } from "./types";

// const axiosInstance = axios.create({
//   baseURL: "/api/",
//   timeout: 2000,
//   headers: { "X-Custom-Header": "foobar" }
// });

import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://cc19todoapp.herokuapp.com",
  headers: {
    "x-auth-token":
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTJmMTRmZjcyZWY5ZjAwMTcyNDZkMTkiLCJsb2dpbiI6IkphbmUiLCJlbWFpbCI6InNvbWVAY29tLmNvbSIsImlhdCI6MTU4MzE4MjEyNH0.wdVf9ZhmMGoCAPFWfQHi6STTWLZ0NKR4cwdmx_Mj2iM"
  }
});

export const fetchTasks = () => dispatch => {
  axiosInstance
    .get("/api/tasks", {
      listID: localStorage.getItem("listID")
    })
    .then(tasks => {
      console.log("GET ALL TASKS", tasks);
      dispatch({
        type: FETCH_TASKS,
        payload: tasks
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const createTask = taskData => dispatch => {
  console.log("TASKDATA CREATE", taskData);
  axiosInstance
    .post("/api/tasks", {
      name: taskData.name,
      listID: localStorage.getItem("listID")
    })
    .then(task => {
      console.log("CREATE NEW TASK");
      dispatch({
        type: NEW_TASK,
        payload: task
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const deleteTask = taskID => dispatch => {
  axiosInstance
    .delete("/api/tasks/" + taskID)
    .then(task => {
      console.log("DELETE TASK");
      dispatch({
        type: DELETE_TASK,
        payload: task
      });
    })
    .catch(err => {
      console.log(err);
    });
};
