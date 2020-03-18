import React, { Component } from "react";
import { connect } from "react-redux";
import { createProject } from "../../actions/projectActions";

class CreateList extends Component {
  state = {
    title: "",
    content: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createProject(this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Title</label>
            <input type="title" id="title" onChange={this.handleChange}></input>
          </div>
          <div>
            <label>Project Content</label>
            <textarea id="content" onChange={this.handleChange}></textarea>
          </div>
          <div>
            <button>Create</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createProject: project => dispatch(createProject(project))
  };
};

export default connect(null, mapDispatchToProps)(CreateList);
