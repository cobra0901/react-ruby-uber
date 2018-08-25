import * as API from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const receiveCurrentUser = ({ user, activities }) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user,
    activities
  };
};

const removeCurrentUser = () => ({
  type: RECEIVE_CURRENT_USER,
  user: null
});

const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

const clearErrs = () => ({
  type: CLEAR_ERRORS
});

export const login = user => dispatch => {
  return API.login(user).then(
    user => {
      dispatch(receiveCurrentUser(user));
    },
    payload => {
      dispatch(receiveErrors(payload.responseJSON));
    }
  );
};

export const logout = () => dispatch => {
  return API.logout().then(p => {
    dispatch(removeCurrentUser());
  });
};

export const signup = user => dispatch =>
  API.signup(user).then(
    user => dispatch(receiveCurrentUser(user)),
    payload => dispatch(receiveErrors(payload.responseJSON))
  );

export const clearErrors = () => dispatch => dispatch(clearErrs());
