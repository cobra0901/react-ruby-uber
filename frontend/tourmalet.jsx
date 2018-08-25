import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import { signup, login, logout } from "./util/session_api_util";
import { Root } from "./components/root";

import { saveActivity } from "./util/activity_util";

document.addEventListener("DOMContentLoaded", () => {
  window.saveActivity = saveActivity;

  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { currentUser: window.currentUser.user },
      entities: { activities: window.currentUser.activities }
    };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  ReactDOM.render(<Root store={store} />, document.getElementById("root"));
});
