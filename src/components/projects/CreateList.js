import React, { Component } from "react";

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
    console.log(this.state);
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

export default CreateList;
