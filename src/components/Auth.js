import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";
import axios from "axios";

class Auth extends Component {
  componentDidMount() {
    axios
      .post("https://cc19todoapp.herokuapp.com/api/auth", {
        email: "some@com.com",
        password: "123456"
      })
      .then(res => {
        console.log("Response fro database here is LOGIN: ", res.data.login);
        // console.log("what is isSignIn here: ", this.props.isSignedIn);

        // this.onAuthChange(this.auth.isSignedIn.get());
        // this.auth.isSignedIn.listen(this.onAuthChange);
        this.onAuthChange(this.props.isSignedIn.get());
        this.props.isSignedIn.listen(this.onAuthChange);
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
    console.log("onSignInClick - this.props.signIN is:", this.props.signIn());
    this.props.signIn();
  };

  onSignOutClick = () => {
    this.props.signOut();
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

// const mapStateToProps = state => {
//   return { isSignedIn: state.auth.isSignedIn };
// };

const mapStateToProps = state => ({
  isSignedIn: state.auth.isSignedIn
});

export default connect(mapStateToProps, { signIn, signOut })(Auth);
