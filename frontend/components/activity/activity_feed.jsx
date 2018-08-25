import React from "react";
import { connect } from "react-redux";
import { fetchActivities } from "../../actions/activity_actions";
import ActivityFeedItem from "./activity_feed_item";
import Waypoint from "react-waypoint";

class ActivityFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1
    };
    this.getActivities = this.getActivities.bind(this);
  }

  getActivities() {
    this.props.fetchActivities(this.state.page);
    this.setState({ page: (this.state.page += 1) });
    console.log(this.state.page);
  }

  componentDidMount() {
    this.props.fetchActivities(1);
  }

  render() {
    if (!this.props.activities) return null;

    const activities = Object.values(this.props.activities)
      .reverse()
      .map(act => {
        return (
          <li key={`${act.id}`}>
            <ActivityFeedItem activity={act} />
          </li>
        );
      });

    return (
      <div>
        <ul className="activity-feed">{activities}</ul>
        <Waypoint onEnter={this.getActivities} />
      </div>
    );
  }
}

const msp = state => ({
  currentUser: state.session.currentUser,
  activities: state.entities.activities
});

const mdp = dispatch => ({
  fetchActivities: page => dispatch(fetchActivities(page))
});

export default connect(msp, mdp)(ActivityFeed);
