import { FETCH_LISTS, NEW_LIST } from "./types";

import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://cc19todoapp.herokuapp.com",
  headers: {
    "x-auth-token":
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTJmMTRmZjcyZWY5ZjAwMTcyNDZkMTkiLCJsb2dpbiI6IkphbmUiLCJlbWFpbCI6InNvbWVAY29tLmNvbSIsImlhdCI6MTU4MzE4MjEyNH0.wdVf9ZhmMGoCAPFWfQHi6STTWLZ0NKR4cwdmx_Mj2iM"
  }
});

export const fetchLists = () => dispatch => {
  axiosInstance
    .get("/api/lists")
    .then(lists => {
      console.log("GET ALL LISTS", lists);
      dispatch({
        type: FETCH_LISTS,
        payload: lists
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const createList = listData => dispatch => {
  console.log("create new list here", listData);

  axiosInstance
    .post("/api/lists", { listData })
    .then(list => {
      console.log("list is:", list);

      dispatch({
        type: NEW_LIST,
        payload: list
      });
    })
    .catch(err => {
      console.log(err);
    });
};
