import React from "react";
import "./App.css";
import { Provider } from "react-redux";

import Lists from "./components/Lists";
import ListForm from "./components/ListForm";
import Tasks from "./components/Tasks";
import PostForm from "./components/PostForm";

import Auth from "./components/Auth";

import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <h3>ToDo application with React and Redux</h3>
        <Auth />
        <hr />
        <ListForm />
        <Lists />
        <hr />
        <PostForm />
        <Tasks />
      </div>
    </Provider>
  );
}

export default App;
