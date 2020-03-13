import React from "react";
import "./App.css";
import { Provider } from "react-redux";

import Auth from "./components/Auth";
import Lists from "./components/Lists";
import Tasks from "./components/Tasks";

import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <h3>ToDo application with React and Redux</h3>
        <Auth />
        <hr />
        <Lists />
        <hr />
        <Tasks />
      </div>
    </Provider>
  );
}

export default App;
