import React from "react";
import { connect } from "react-redux";
import { fetchUsers, createFollow } from "../../actions/user_actions";

class SuggestedFriends extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    if (!Object.values(this.props.users)[0] || !this.props.currentUser)
      return null;

    let currentUser = this.props.currentUser.user
      ? this.props.users[this.props.currentUser.user.id]
      : this.props.users[this.props.currentUser.id];
    if (!currentUser) return null;
    let suggested = Object.values(this.props.users)
      .filter(
        user =>
          user.id !== currentUser.id &&
          !currentUser.following_ids.includes(user.id)
      )
      .slice(0, 5)
      .map((user, idx) => {
        return (
          <li key={`user-${idx}`} className="suggested-friend-li">
            <img src={user.avatar_url} />
            <div>
              <div>{user.username}</div>
              <div>
                <button
                  className="suggested-follow-button"
                  onClick={() => {
                    return this.props.createFollow(currentUser.id, user.id);
                    suggested = suggested.splice(idx, 1);
                    this.forceUpdate();
                  }}
                >
                  Follow
                </button>
              </div>
            </div>
          </li>
        );
      });
    return (
      <div className="suggested-friends-list">
        <h4>Suggested Friends</h4>
        <ul className="suggested-friends-ul">{suggested}</ul>
      </div>
    );
  }
}

const msp = state => ({ users: state.entities.users });
const mdp = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers()),
  createFollow: (followerId, followedId) =>
    dispatch(createFollow(followerId, followedId))
});

export default connect(msp, mdp)(SuggestedFriends);
