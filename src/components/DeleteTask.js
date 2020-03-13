import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { deleteTask } from "../actions/taskActions";

class DeleteTask extends Component {
  onDeleteButtonClick = () => {
    console.log("Delete button clicked");
    this.props.deleteTask(this.props.taskID);
  };

  render() {
    return <button onClick={this.onDeleteButtonClick}>Delete</button>;
  }
}

DeleteTask.propTypes = {
  deleteTask: PropTypes.func.isRequired,
  task: PropTypes.object
};

const mapStateToProps = state => ({
  task: state.tasks.item
});

export default connect(mapStateToProps, { deleteTask })(DeleteTask);
