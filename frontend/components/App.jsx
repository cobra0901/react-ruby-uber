import React from "react";
import SplashPage from "./session/splash_page";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import DashboardContainer from "./dashboard/dashboard_container";
import ActivityShow from "./activity/show";
import RouteMap from "./map/route_map";
import UserShow from "./user/user_show";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import Tracker from "./map/tracker";

export const App = () => {
  return (
    <div>
      <AuthRoute path="/login" exact component={LoginFormContainer} />
      <AuthRoute path="/signup" exact component={SignupFormContainer} />
      <ProtectedRoute path="/dashboard" exact component={DashboardContainer} />
      <ProtectedRoute path="/routes/new" component={RouteMap} />
      <ProtectedRoute path="/activities/:activityId" component={ActivityShow} />
      <ProtectedRoute path="/users/:userId" component={UserShow} />
      <ProtectedRoute path="/tracker" component={Tracker} />
      <AuthRoute exact path="/" component={SplashPage} />
    </div>
  );
};

export default App;
