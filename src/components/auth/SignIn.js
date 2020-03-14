import React, { Component } from "react";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
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
          <h5>Sign In</h5>
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
            <button>Login</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
