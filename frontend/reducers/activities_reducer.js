import {
  RECEIVE_ACTIVITY,
  RECEIVE_ACTIVITIES,
  RECEIVE_LIKED_ACTIVITY
} from "../actions/activity_actions";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_USER } from "../actions/user_actions";
import { merge } from "lodash";

const activitiesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_ACTIVITY:
      return merge({}, oldState, {
        [action.activity.id]: action.activity
      });
    case RECEIVE_LIKED_ACTIVITY:
      return merge({}, oldState, {
        [action.activity.id]: action.activity
      });
    case RECEIVE_CURRENT_USER:
    case RECEIVE_USER:
    case RECEIVE_ACTIVITIES:
       ;
      return merge({}, oldState, action.activities);
    default:
      return oldState;
  }
};

export default activitiesReducer;
