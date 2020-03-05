import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createTask } from "../actions/postActions";

// import axios from "axios";
// const axiosInstance = axios.create({
//   baseURL: "https://cc19todoapp.herokuapp.com",
//   headers: {
//     "x-auth-token":
//       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTJmMTRmZjcyZWY5ZjAwMTcyNDZkMTkiLCJsb2dpbiI6IkphbmUiLCJlbWFpbCI6InNvbWVAY29tLmNvbSIsImlhdCI6MTU4MzE4MjEyNH0.wdVf9ZhmMGoCAPFWfQHi6STTWLZ0NKR4cwdmx_Mj2iM"
//   }
// });

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      listID: "5e373d650b37b9001790c2af"
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const task = {
      name: this.state.name,
      listID: this.state.listID
    };

    // Call action here
    this.props.createTask(task);

    // axiosInstance
    //   .post("/api/tasks", {
    //     listID: "5e373d650b37b9001790c2af",
    //     name: this.state.body
    //   })
    //   .then(data => console.log("POST = NEW TASK:", data))
    //   .catch(err => {
    //     console.log(err);
    //   });
  }

  render() {
    return (
      <div>
        <h1>Post Tasks</h1>
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

PostForm.propTypes = {
  createTask: PropTypes.func.isRequired
};

export default connect(null, { createTask })(PostForm);
