import { DELETE_TASK } from "./types";

import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://cc19todoapp.herokuapp.com",
  headers: {
    "x-auth-token":
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTJmMTRmZjcyZWY5ZjAwMTcyNDZkMTkiLCJsb2dpbiI6IkphbmUiLCJlbWFpbCI6InNvbWVAY29tLmNvbSIsImlhdCI6MTU4MzE4MjEyNH0.wdVf9ZhmMGoCAPFWfQHi6STTWLZ0NKR4cwdmx_Mj2iM"
  }
});

export const deleteTask = () => dispatch => {
  console.log("Delete task here");

  axiosInstance
    // .delete(`/api/tasks/${taskId}`)
    .delete("/api/tasks/5e5e2288a7533c00175135e8")

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
