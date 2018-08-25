import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { searchUsers } from "../../actions/user_actions";

class UserSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      open: false
    };
    this.updateValue = this.updateValue.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateValue(e) {
    this.setState({ name: e.currentTarget.value }, () => {
      if (this.state.name.length > 0) {
        return this.props.searchUsers(this.state.name);
      }
    });
  }

  handleClick(userId) {
    this.props.history.push(`/users/${userId}`);
  }

  handleSubmit() {
    const selected = Object.values(this.props.searchReturn).filter(
      user => user.username === this.state.name
    );
    if (selected[0]) {
      this.props.history.push(`/users/${selected[0].id}`);
    } else {
      this.props.history.push(`/users/search`);
    }
  }

  toggleSearchBar() {
    this.setState({ open: !this.state.open });
  }

  render() {
    const returnVal =
      this.props.searchReturn &&
      this.state.name.length > 0 &&
      Object.values(this.props.searchReturn).map(user => (
        <div
          className="user-search-list-item"
          key={user.id}
          onClick={() => this.handleClick(user.id)}
        >
          <img src={user.avatar_url} />
          <div>{user.username}</div>
        </div>
      ));
    return (
      <div className="outer-search-div">
        <form onSubmit={this.handleSubmit}>
          <div className="inner-search-div">
            <input
              type="text"
              placeholder="Find your friends"
              value={this.state.name}
              onChange={this.updateValue}
              className={
                this.state.open ? "user-search-input open" : "user-search-input"
              }
            />
            <ul>{returnVal}</ul>
          </div>
        </form>
        <button
          onClick={this.toggleSearchBar.bind(this)}
          className="search-button"
        >
          {this.state.open ? (
            <i className="material-icons">close</i>
          ) : (
            <i className="material-icons">search</i>
          )}
        </button>
      </div>
    );
  }
}

const msp = state => ({
  searchReturn: state.search
});

const mdp = dispatch => ({
  searchUsers: params => dispatch(searchUsers(params))
});

export default withRouter(connect(msp, mdp)(UserSearch));
