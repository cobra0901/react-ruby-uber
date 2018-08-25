import React from "react";
import { connect } from "react-redux";
import BoxRight from "./box_right";
import MainHeader from "../header/main_header";
import Map from "./map";
import { fetchActivity } from "../../actions/activity_actions";
import { withRouter, Link } from "react-router-dom";

class ActivityShow extends React.Component {
  componentDidMount() {
    this.props.fetchActivity(
      this.props.match.params.activityId,
      this.props.currentUser.id
    );
  }

  render() {
    const activity = this.props.activity;
    if (!activity) return null;

    return (
      <div>
        <MainHeader />
        <div className="map-show-body">
          <div className="index-link">
            <Link to="/">My Routes </Link>
            <a>&nbsp;/&nbsp;{activity.title}</a>
          </div>

          <h1 className="ac-title">
            <img
              src={
                activity.type_of === "Ride"
                  ? "https://image.flaticon.com/icons/png/128/130/130276.png"
                  : "https://upload.wikimedia.org/wikipedia/commons/1/14/Running_shoe_icon.png"
              }
            />
            {activity.title}
          </h1>
          <div className="map-row">
            <div className="map-graph-container">
              <Map polyline={activity.polyline} />
            </div>
            <BoxRight />
          </div>
        </div>
      </div>
    );
  }
}

const msp = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  activity: state.entities.activities[ownProps.match.params.activityId]
});

const mdp = dispatch => ({
  fetchActivity: (id, currentUser) => dispatch(fetchActivity(id, currentUser))
});

export default withRouter(connect(msp, mdp)(ActivityShow));
