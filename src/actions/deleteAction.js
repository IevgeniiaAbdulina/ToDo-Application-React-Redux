import { DELETE_TASK, DELETE_LIST } from "./types";

import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://cc19todoapp.herokuapp.com",
  headers: {
    "x-auth-token":
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTJmMTRmZjcyZWY5ZjAwMTcyNDZkMTkiLCJsb2dpbiI6IkphbmUiLCJlbWFpbCI6InNvbWVAY29tLmNvbSIsImlhdCI6MTU4MzE4MjEyNH0.wdVf9ZhmMGoCAPFWfQHi6STTWLZ0NKR4cwdmx_Mj2iM"
  }
});

export const deleteTask = () => dispatch => {
  console.log("Delete task");

  axiosInstance
    // .delete(`/api/tasks/${taskId}`)
    .delete("/api/tasks/5e63ff19753f3d001770a122")
    .then(res => {
      console.log("RESponse: ", res);
    })
    .then(task => {
      dispatch({
        type: DELETE_TASK,
        payload: task
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const deleteList = () => dispatch => {
  console.log("DELETE LISt");

  axiosInstance
    // .delete(`/api/lists/${listID}`)
    .delete("/api/lists/5e36f99ac50f2900175b7be5")
    .then(res => {
      console.log("Delete list", res);
    })
    .then(list => {
      dispatch({
        type: DELETE_LIST,
        payload: list
      });
    })
    .catch(err => {
      console.log("err");
    });
};
