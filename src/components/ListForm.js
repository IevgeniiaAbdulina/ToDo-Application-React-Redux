import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createList } from "../actions/listActions";

class ListForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const list = {
      name: this.state.name
    };
    this.props.createList(list);
  }

  render() {
    return (
      <div>
        <h3>Post list</h3>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>List Name: </label>
            <br />
            <textarea
              name="name"
              value={this.state.name}
              onChange={this.onChange}
            />
          </div>
          <br />
          <button type="submit">OK</button>
        </form>
      </div>
    );
  }
}

ListForm.propTypes = {
  createList: PropTypes.func.isRequired
};

export default connect(null, { createList })(ListForm);
