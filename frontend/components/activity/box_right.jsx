import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const BoxRight = props => {
  if (!props.activity) return null;

  return (
    <div className="box-right-cont">
      <div
        className="top-row"
        onClick={() =>
          props.history.push(`/users/${props.activity.athlete_id}`)
        }
      >
        <img src={props.activity.owner_img} />
        <div>
          <a className="name">By {props.activity.owner.username}</a>
          <a className="date">Created on {props.activity.date}</a>
        </div>
      </div>

      <div className="mid-row">
        <ul>
          <li>
            <div>{props.activity.distance}mi</div>
            <a>Distance</a>
          </li>
          <li>
            <div>{props.activity.elevation}ft</div>
            <a>Elevation Gain</a>
          </li>
          <li>
            <div>{props.activity.type_of}</div>
            <a>Type</a>
          </li>
        </ul>

        <div className="moving-time">
          <div className="moving-time-cont">
            <i className="material-icons">schedule</i>
            <div>Est. Time:</div>
            <div> {props.activity.est_moving_time}</div>
          </div>
        </div>
      </div>

      <div className="bottom-row">
        <a />
        <ul>
          <li />
          <li />
          <li />
        </ul>
      </div>
    </div>
  );
};

const msp = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    activity: state.entities.activities[ownProps.match.params.activityId]
  };
};

export default withRouter(connect(msp, null)(BoxRight));
