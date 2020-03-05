import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { signIn, signOut } from "../actions/index";

class Auth extends Component {
  componentDidMount() {
    axios
      .post("https://cc19todoapp.herokuapp.com/api/auth", {
        email: "some@com.com",
        password: "123456"
      })
      .then(res => {
        console.log("here is LOGIN: ", res.data.login);

        this.onAuthChange(this.auth.isSignedIn(res.data.token));
        this.auth.isSignedIn.listen(this.onAuthChange);
      })
      .catch(err => {
        console.log(err);
      });
  }

  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn();
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button style={{ color: "red" }} onClick={this.onSignOutClick}>
          SignOut
        </button>
      );
    } else {
      return <button onClick={this.onSignInClick}>SingIn</button>;
    }
  }

  render() {
    return <div>LOGIN USER HERE {this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(Auth);
