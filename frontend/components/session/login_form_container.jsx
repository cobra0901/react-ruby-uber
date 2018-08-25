import React from "react";
import { login, clearErrors } from "../../actions/session_actions";
import SessionForm from "./session_form";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const msp = state => {
  return {
    formType: "Log In",
    errors: state.errors.session
  };
};

const mdp = dispatch => ({
  action: user => dispatch(login(user)),
  login: user => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(msp, mdp)(SessionForm);
