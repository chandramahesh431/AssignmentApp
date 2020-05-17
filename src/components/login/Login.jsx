import React, { Component } from "react";
import "./login.css";
import { connect } from "react-redux";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = () => {
    this.props.updateUserData();
    this.props.history.push("/landingPage");
  };
  render() {
    console.log("data", this.props.userInfo);
    return (
      <div>
        <h2>Login123</h2>
        <button onClick={this.handleClick}>Redirect</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.loginReducer.signedInUser,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateUserData: (data) => {
      dispatch({
        type: "USER_INFO",
        payload: { username: "super", password: "super" },
      });
    },
  };
};

Login = connect(mapStateToProps, mapDispatchToProps)(Login);

export { Login };
