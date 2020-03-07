import React from "react";
import "./App.css";
import { Provider } from "react-redux";

import Lists from "./components/Lists";
import PostList from "./components/PostList";
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
        <PostList />
        <Lists />
        <hr />
        <PostForm />
        <Tasks />
      </div>
    </Provider>
  );
}

export default App;
