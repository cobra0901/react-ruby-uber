import { combineReducers } from "redux";
import activities from "./activities_reducer";
import users from "./users_reducer";
import images from "./images_reducer";

const entitiesReducer = combineReducers({
  activities,
  users,
  images
});

export default entitiesReducer;
