import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export default class AlertDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({ open: !this.state.open });
  }

  render() {
    const items = this.props.alerts.map((alert, i) => {
      <a key={`alert-${i}`}>{alert}</a>;
    });

    return (
      <div className="dropdown-div-bell" onClick={this.handleClick}>
        <i className="material-icons bell">notifications_none</i>
        {items}
      </div>
    );
  }
}
