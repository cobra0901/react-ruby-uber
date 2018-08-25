import { RECEIVE_IMAGE, RECEIVE_IMAGES } from "../actions/image_actions";
import { RECEIVE_USER } from "../actions/user_actions";
import { merge } from "lodash";

const imagesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_USER:
    case RECEIVE_IMAGES:
      return merge({}, oldState, action.images);
    case RECEIVE_IMAGE:
      return merge({}, oldState, ([action.image.id]: action.image));
    default:
      return oldState;
  }
};

export default imagesReducer;
