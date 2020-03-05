import React from "react";
import "./App.css";
import { Provider } from "react-redux";

import PostForm from "./components/PostForm";
import Tasks from "./components/Tasks";
import Auth from "./components/Auth";

import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <h3>ToDo application with React and Redux</h3>
        <PostForm />
        <Auth />
        <hr />
        <Tasks />
      </div>
    </Provider>
  );
}

export default App;
