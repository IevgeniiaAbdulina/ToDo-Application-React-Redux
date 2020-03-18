import React, { Component } from "react";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: ""
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
          <h5>Sign UP</h5>
          <div>
            <label>Email</label>
            <input type="email" id="email" onChange={this.handleChange}></input>
          </div>

          <div>
            <label>Password</label>
            <input
              type="password"
              id="password"
              onChange={this.handleChange}
            ></input>
          </div>

          <div>
            <label>First Name</label>
            <input
              type="text"
              id="firstName"
              onChange={this.handleChange}
            ></input>
          </div>

          <div>
            <label>Last Name</label>
            <input
              type="text"
              id="lastName"
              onChange={this.handleChange}
            ></input>
          </div>
          <div>
            <button>Sign Up</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
