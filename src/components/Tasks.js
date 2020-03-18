import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchTasks } from "../actions/taskActions";
import DeleteTask from "./DeleteTask";
import TaskForm from "./TaskForm";

class Tasks extends Component {
  UNSAFE_componentWillMount() {
    this.props.fetchTasks();
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps runs");
    if (nextProps.newTask) {
      this.props.tasks.unshift(nextProps.newTask.data);
    }
  }

  render() {
    // const postTasks = this.props.tasks.map(task => {
    //   return (
    //     <div key={task._id}>
    //       {task.name} <DeleteTask taskID={task._id} />
    //     </div>
    //   );
    // });

    const allTasks = this.props.tasks;
    const taskList = allTasks.length ? (
      allTasks.map(task =>
        task._id ? (
          <div key={task._id}>
            {task.name} <DeleteTask taskID={task._id} />
          </div>
        ) : null
      )
    ) : (
      <div>No tasks yet</div>
    );

    // const taskList = this.props.tasks;
    // const postTasks = taskList.length ? (
    //   taskList.map(task => {
    //     return (
    //       <>
    //         <div key={task._id}>{task.name}</div>
    //         <DeleteTask taskID={task._id} />
    //       </>
    //     );
    //   })
    // ) : (
    //   <div>No tasks yet</div>
    // );

    return (
      <div>
        <TaskForm />
        <h3>Tasks:</h3>
        {/* {postTasks} */}
        {taskList}
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
