import { combineReducers } from "redux";
import errorsReducer from "./errors_reducer";
import sessionReducer from "./session_reducer";
import entitiesReducer from "./entities_reducer";
import search from "./search_reducer";

const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer,
  search
});

export default rootReducer;
