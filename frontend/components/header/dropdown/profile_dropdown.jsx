import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../../actions/session_actions";

class ProfileDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.mouseEventHandler = this.mouseEventHandler.bind(this);
  }

  mouseEventHandler(e) {
    this.setState({ open: !this.state.open });
  }

  render() {
    const currentUser = this.props.currentUser.user
      ? this.props.currentUser.user
      : this.props.currentUser;

    const items =
      this.state.open === true ? (
        <ul className="profile-ul">
          <li>
            <button onClick={this.props.logout}>Log Out</button>
          </li>
        </ul>
      ) : null;

    return (
      <div
        className="dropdown-div profile"
        onMouseEnter={this.mouseEventHandler}
        onMouseLeave={this.mouseEventHandler}
      >
        <div className="profile-dropdown-inner">
          <img className="profile" src={currentUser.avatar_url} />
          <i className="material-icons">keyboard_arrow_down</i>
          {items}
        </div>
      </div>
    );
  }
}

const msp = state => ({
  currentUser: state.session.currentUser
});

const mdp = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(msp, mdp)(ProfileDropdown);
