import * as API from "../util/user_util";
import { receiveCurrentUser } from "./session_actions";

export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_SEARCH = "RECEIVE_SEARCH";

const receiveUsers = users => {
  return {
    type: RECEIVE_USERS,
    users
  };
};

const receiveUser = ({ user, activities, images }) => ({
  type: RECEIVE_USER,
  user,
  activities,
  images
});

const receiveSearch = users => ({
  type: RECEIVE_SEARCH,
  users
});

export const fetchUsers = () => dispatch => {
  return API.fetchUsers().then(users => dispatch(receiveUsers(users)));
};

export const fetchUser = userId => dispatch => {
  return API.fetchUser(userId).then(payload => dispatch(receiveUser(payload)));
};

export const updateUser = (userId, attributes) => dispatch => {
  return API.updateUser(userId, attributes).then(payload =>
    dispatch(receiveUser(payload))
  );
};

export const searchUsers = query => dispatch => {
  return API.fetchUsers(query).then(users => dispatch(receiveSearch(users)));
};

export const createFollow = (follower, followed) => dispatch => {
  return API.createFollow(follower, followed).then(payload => {
    return dispatch(receiveUsers(payload));
  });
};

export const deleteFollow = (followerId, followedId) => dispatch => {
  return API.deleteFollow(followerId, followedId).then(payload => {
    return dispatch(receiveUsers(payload));
  });
};
