import React from "react";
import { signup, login, clearErrors } from "../../actions/session_actions";
import SessionForm from "./session_form";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const msp = state => {
  return {
    formType: "Sign Up",
    errors: state.errors.session
  };
};

const mdp = dispatch => ({
  action: user => dispatch(signup(user)),
  login: user => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(msp, mdp)(SessionForm);
