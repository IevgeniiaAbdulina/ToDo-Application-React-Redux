import React, { Component } from "react";

import { connect } from "react-redux";
import Notifications from "./Notifications";
import ListsList from "../projects/ListsList";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

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
  console.log(state);
  return {
    // projects: state.project.projects
    projects: state.firestore.ordered.projects
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects" }])
)(Dashboard); // connect to redux store
