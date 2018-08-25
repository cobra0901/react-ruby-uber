import React from "react";
import { Link } from "react-router-dom";
import SessionHeader from "../header/session_header";

export default class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      focusedInput: null
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginGuest = this.loginGuest.bind(this);
  }

  componentWillMount() {
    if (this.props.formType === "Sign Up") {
      this.state.username = "";
    }
  }

  componentWillUnmount(nextProps) {
    this.props.clearErrors();
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state);
  }

  loginGuest(e) {
    e.preventDefault();
    this.props.login({
      email: "email@gmail.com",
      password: "password"
    });
  }

  render() {
    const newUserForm =
      this.props.formType === "Sign Up" ? (
        <div>
          <label>
            <input
              type="text"
              value={this.state.username}
              onChange={this.update("username")}
              placeholder="   Create a Username"
              className={
                this.state.focusedInput === 1 || this.state.username != ""
                  ? "focused"
                  : ""
              }
              onFocus={() => this.setState({ focusedInput: 1 })}
            />
            {this.props.errors.username && (
              <li>Username {this.props.errors.username}</li>
            )}
          </label>
        </div>
      ) : null;

    const imgSrc =
      this.props.formType === "Log In" ? window.login : window.signup;
    const guest = (
      <div className="button-holster">
        <button onClick={this.loginGuest}>Log In as Guest</button>
      </div>
    );

    return (
      <div>
        <SessionHeader formType={this.props.formType} />
        <div className={this.props.formType}>
          <div className="session-box">
            <div className="form-title-box">
              <h2 className="form-head">{this.props.formType}</h2>
            </div>
            <ul className="errors">
              {typeof this.props.errors[0] === "string" &&
                this.props.errors.map((err, i) => <li key={i}>{err}</li>)}
            </ul>
            <form onSubmit={this.handleSubmit} className="session-form">
              <label>
                <input
                  type="email"
                  value={this.state.email}
                  onChange={this.update("email")}
                  placeholder="   Email"
                  className={
                    this.state.focusedInput === 2 || this.state.email != ""
                      ? "focused"
                      : ""
                  }
                  onFocus={() => this.setState({ focusedInput: 2 })}
                />
                {this.props.errors.email && (
                  <li>Email {this.props.errors.email}</li>
                )}
              </label>
              {newUserForm}
              <label>
                <input
                  type="password"
                  value={this.state.password}
                  onChange={this.update("password")}
                  placeholder="   Password"
                  className={
                    this.state.focusedInput === 3 || this.state.password != ""
                      ? "focused"
                      : ""
                  }
                  onFocus={() => this.setState({ focusedInput: 3 })}
                />
                {this.props.errors.password && (
                  <li>Password {this.props.errors.password}</li>
                )}
              </label>
              <div className="button-holster">
                <button>
                  {this.props.formType === "Log In" ? "Log In" : "Sign Up"}
                </button>
              </div>
              {guest}
            </form>
          </div>
        </div>
      </div>
    );
  }
}
