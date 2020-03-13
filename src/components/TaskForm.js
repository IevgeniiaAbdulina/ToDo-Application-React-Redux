import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createTask } from "../actions/taskActions";

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.createTask(this.state);
    this.setState({
      name: ""
    });
  };

  render() {
    return (
      <div>
        <h3>Post Tasks</h3>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Task Name: </label>
            <br />
            <textarea
              name="name"
              onChange={this.onChange}
              value={this.state.name}
            />
          </div>
          <br />
          <button type="submit">OK</button>
        </form>
      </div>
    );
  }
}

TaskForm.propTypes = {
  createTask: PropTypes.func.isRequired
};

export default connect(null, { createTask })(TaskForm);
