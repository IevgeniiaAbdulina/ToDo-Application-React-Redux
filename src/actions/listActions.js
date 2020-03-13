import { FETCH_LISTS, NEW_LIST, DELETE_LIST } from "./types";

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
      localStorage.setItem("listID", lists.data[0]._id);
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
  axiosInstance
    .post("/api/lists", {
      name: listData.name
    })
    .then(list => {
      console.log("CREATE NEW LIST");
      dispatch({
        type: NEW_LIST,
        payload: list
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const deleteList = listID => dispatch => {
  axiosInstance
    .delete("/api/lists/" + listID)
    .then(list => {
      console.log("DELETE LIST");
      dispatch({
        type: DELETE_LIST,
        payload: list
      });
    })
    .catch(err => {
      console.log(err);
    });
};
