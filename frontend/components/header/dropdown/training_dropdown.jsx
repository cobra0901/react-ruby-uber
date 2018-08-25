import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export default class TrainingDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.mouseEventHandler = this.mouseEventHandler.bind(this);
  }

  mouseEventHandler(e) {
    this.setState({ open: !this.state.open });
  }

  render() {
    const items =
      this.state.open === true ? (
        <ul>
          <li>
            <Link className="dropdown-link" to="/">
              Training Log
            </Link>
          </li>
          <li>
            <Link className="dropdown-link" to="/">
              My Activities
            </Link>
          </li>
        </ul>
      ) : null;

    return (
      <div
        className="dropdown-div"
        onMouseEnter={this.mouseEventHandler}
        onMouseLeave={this.mouseEventHandler}
      >
        <div>
          <a>Training</a>
          <i className="material-icons">keyboard_arrow_down</i>
        </div>
        {items}
      </div>
    );
  }
}
