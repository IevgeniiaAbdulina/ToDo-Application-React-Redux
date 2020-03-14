import React, { Component } from "react";

import Notifications from "./Notifications";
import ListsList from "../projects/ListsList";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <div>
          <ListsList />
        </div>
        <div>
          <Notifications />
        </div>
      </div>
    );
  }
}

export default Dashboard;
