import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUser, createFollow } from "../../actions/user_actions";
import Goals from "./goals";

class ProfileColumn extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.currentUser.id);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.createFollow(
      this.props.currentUser.id,
      this.props.currentUser.id
    );
  }

  render() {
    if (!this.props.currentUser) return null;
    const currentUser = this.props.currentUser.user
      ? this.props.currentUser.user
      : this.props.currentUser;

    if (!this.props.users[currentUser.id]) return null;

    let acts;
    if (currentUser.activity_ids) {
      acts = currentUser.activity_ids;
    } else {
      acts = [];
    }

    const lastAct =
      acts.length > 0 ? this.props.activities[acts[acts.length - 1]] : null;

    const lastActOrAddAct = lastAct ? (
      <Link to={`/activities/${lastAct.id}`}>
        <div className="last-act-info">
          <div>Last Activity </div>
          <div className="last-act-title-date">
            <div className="last-act-name">{lastAct.title}</div>
            <div className="last-act-date">{lastAct.date}</div>
          </div>
          <i className="material-icons">keyboard_arrow_right</i>
        </div>
      </Link>
    ) : (
      <Link to="/routes/new">
        <b>Add an Activity</b>
        <i className="material-icons">keyboard_arrow_right</i>
      </Link>
    );

    return (
      <div className="prof-cont" ref="sticky">
        <div className="prof-box">
          <div className="top-prof">
            <div
              className="line-1"
              onClick={() =>
                this.props.history.push(`/users/${currentUser.id}`)
              }
            >
              <img src={currentUser.avatar_url} />
            </div>
            <div className="line-2">
              <div>{currentUser.username}</div>
            </div>
            <div className="line-3">
              <ul>
                <li className="line-3-row">
                  <a>
                    <div>Following</div>
                    <div className="num">
                      {this.props.users[currentUser.id].followings.length}
                    </div>
                  </a>
                </li>
                <li className="line-3-row">
                  <a>
                    <div>Followers</div>
                    <div className="num">{currentUser.followers.length}</div>
                  </a>
                </li>
                <li className="line-3-row">
                  <a>
                    <div>Activities</div>
                    <div className="num">{acts.length}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="prof-links-cont">
            <div className="last-act-cont">{lastActOrAddAct}</div>
            <Link to={`/users/${this.props.currentUser.id}`}>
              <div className="activity-log-button">
                Activity Log
                <i className="material-icons">keyboard_arrow_right</i>
              </div>
            </Link>
          </div>
        </div>
        <div className="goals-sticky">
          <Goals currentUser={currentUser} editable={true} />
        </div>
      </div>
    );
  }
}

const msp = state => {
  return {
    currentUser: state.session.currentUser,
    activities: state.entities.activities,
    users: state.entities.users
  };
};

const mdp = dispatch => ({
  fetchUser: userId => dispatch(fetchUser(userId))
});

export default withRouter(connect(msp, mdp)(ProfileColumn));
