import React from "react";
import { Link, withRouter } from "react-router-dom";

const SessionHeader = props => {
  let signup = (
    <div
      className="signup-button"
      onClick={() => props.history.push("/signup")}
    >
      <Link to="/signup" className="signup-link">
        Sign Up
      </Link>
    </div>
  );
  let login = (
    <div className="login-button" onClick={() => props.history.push("/login")}>
      <Link to="/login" className="login-link">
        Log In
      </Link>
    </div>
  );

  if (props.formType === "Log In") {
    login = null;
  } else if (props.formType === "Sign Up") {
    signup = null;
  }

  return (
    <div className="form-header">
      <header className="initial-header">
        <h1 className="logo">Tourmalet</h1>
        <div className="header-links">
          {signup}
          {login}
        </div>
      </header>
    </div>
  );
};

export default withRouter(SessionHeader);
