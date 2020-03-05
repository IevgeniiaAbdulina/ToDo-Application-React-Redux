import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchTasks } from "../actions/postActions";

// const axiosInstance = axios.create({
//   baseURL: "/api/",
//   timeout: 2000,
//   headers: { "X-Custom-Header": "foobar" }
// });

// import axios from "axios";
// const axiosInstance = axios.create({
//   baseURL: "https://cc19todoapp.herokuapp.com",
//   headers: {
//     "x-auth-token":
//       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTJmMTRmZjcyZWY5ZjAwMTcyNDZkMTkiLCJsb2dpbiI6IkphbmUiLCJlbWFpbCI6InNvbWVAY29tLmNvbSIsImlhdCI6MTU4MzE4MjEyNH0.wdVf9ZhmMGoCAPFWfQHi6STTWLZ0NKR4cwdmx_Mj2iM"
//   }
// });

class Tasks extends Component {
  UNSAFE_componentWillMount() {
    this.props.fetchTasks();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.tasks.unshift(nextProps.newPost);
    }
  }
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     lists: [],
  //     tasks: []
  //   };
  // }

  // UNSAFE_componentWillMount() {
  //   console.log("WILL MOUNT: POST");

  //   axiosInstance
  //     .post("/api/auth", {
  //       email: "some@com.com",
  //       password: "123456"
  //     })
  //     .then(res => {
  //       console.log("POST = LOGIN USER:", res.data.login);
  //       this.setState({ nameUser: res.data.login });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });

  // axiosInstance
  //   .post("/api/tasks", {
  //     listID: "5e373d650b37b9001790c2af",
  //     name: "02_Must have ToDo"
  //   })
  //   .then(res => {
  //     console.log("POST = NEW TASK:", res);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });
  // }

  // componentDidMount() {
  //   console.log("DID MOUNT: GET");

  //   axiosInstance
  //     .get("/api/lists")
  //     .then(res => {
  //       console.log("GET = SHOW ALL LISTS: ", res.data);
  //       this.setState({ lists: res.data });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });

  //   axiosInstance
  //     .get("/api/tasks")
  //     .then(res => {
  //       console.log("GET = SHOW ALL TASKS:", res);
  //       this.setState({ tasks: res.data });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }

  render() {
    // const postLists = this.state.lists.map(list => (
    //   <div key={list._id}>
    //     <h5>{list.name}</h5>
    //   </div>
    // ));

    const postTasks = this.props.tasks.map(task => (
      <div key={task._id}>
        <h5>{task.name}</h5>
      </div>
    ));

    return (
      <div>
        <h3>Lists:</h3>
        {/* {postLists} */}

        <h3>Tasks:</h3>
        {postTasks}
      </div>
    );
  }
}

Tasks.propTypes = {
  fetchTasks: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired,
  newTask: PropTypes.object
};

const mapStateToProps = state => ({
  tasks: state.tasks.items,
  newTask: state.tasks.item
});

export default connect(mapStateToProps, { fetchTasks })(Tasks);
