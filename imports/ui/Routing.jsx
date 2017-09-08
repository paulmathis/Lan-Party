import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import { Meteor } from "meteor/meteor";

import Splash from "./Splash/Splash";
import Lan from "./Lan/Lan";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      Meteor.user() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location }
          }}
        />
      )}
  />
);

const Routing = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (Meteor.user() ? <Redirect to="/lan" /> : <Splash />)}
          />
          <PrivateRoute path="/lan" component={Lan} />
        </Switch>
      </div>
    </Router>
  );
};

export default Routing;
