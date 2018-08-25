import * as API from "../util/activity_util";

export const RECEIVE_ACTIVITY = "RECEIVE_ACTIVITY";
export const RECEIVE_ACTIVITIES = "RECEIVE_ACTIVITIES";
export const RECEIVE_LIKED_ACTIVITY = "RECEIVE_LIKED_ACTIVITY";

const receiveActivity = (activity, currentUser) => ({
  type: RECEIVE_ACTIVITY,
  activity,
  user: currentUser
});

const receiveActivities = activities => {
  return {
    type: RECEIVE_ACTIVITIES,
    activities
  };
};

const receiveLikedActivity = activity => ({
  type: RECEIVE_LIKED_ACTIVITY,
  activity
});

export const saveActivity = (activity, currentUser) => dispatch => {
  return API.saveActivity(activity).then(act =>
    dispatch(receiveActivity(act, currentUser))
  );
};

export const fetchActivity = (id, currentUser) => dispatch => {
  return API.fetchActivity(id).then((act, currentUser) =>
    dispatch(receiveActivity(act, currentUser))
  );
};

export const fetchActivities = page => dispatch => {
  return API.fetchActivities(page).then(acts => {
    dispatch(receiveActivities(acts));
  });
};

export const createLike = activityId => dispatch => {
  return API.createLike(activityId).then(act =>
    dispatch(receiveLikedActivity(act))
  );
};

export const createComment = comment => dispatch => {
  return API.createComment(comment).then(activity => {
    dispatch(receiveActivity(activity));
  });
};
