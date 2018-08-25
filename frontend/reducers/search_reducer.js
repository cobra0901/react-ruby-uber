import { RECEIVE_SEARCH } from "../actions/user_actions";
import { merge } from "lodash";

const searchReducer = (oldState = {}, action) => {
  switch (action.type) {
    case RECEIVE_SEARCH:
      return action.users;
    default:
      return {};
  }
};

export default searchReducer;
