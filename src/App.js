import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import { Provider } from "react-redux";

// import Auth from "./components/Auth";
import Lists from "./components/Lists";
import Tasks from "./components/Tasks";

import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import ListDetails from "./components/projects/ListDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";

// import store from "./store"; // moved to src/index.js

function App() {
  return (
    // <Provider store={store}>
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/project/:id" component={ListDetails} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
        </Switch>
        {/* <Auth /> */}
        <hr />
        <Lists />
        <hr />
        <Tasks />
      </div>
    </BrowserRouter>
    // </Provider>
  );
}

export default App;
