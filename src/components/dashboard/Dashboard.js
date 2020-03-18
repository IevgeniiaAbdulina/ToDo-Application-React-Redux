import React, { Component } from "react";

import { connect } from "react-redux";
import Notifications from "./Notifications";
import ListsList from "../projects/ListsList";

class Dashboard extends Component {
  render() {
    // console.log(this.props);
    const { projects } = this.props;
    return (
      <div>
        <div>
          <ListsList projects={projects} />
        </div>
        <div>
          <Notifications />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    projects: state.project.projects
  };
};

export default connect(mapStateToProps)(Dashboard); // connect to redux store
