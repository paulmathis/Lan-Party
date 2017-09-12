import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import Splash from './Splash/Splash';
import Lan from './Lan/Lan';
import CreateLan from './Lan/CreateLan';
import LanPage from './Lan/LanPage';

const fourohfour = () => <h1>404</h1>;

// Redirect to home page if there is not a user logged in
const PrivateRoute = ({ component: Component, currentUser, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      (currentUser ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/',
            state: { from: props.location },
          }}
        />
      ))}
  />
);

const Routing = props => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" render={() => (props.currentUser ? <Redirect to="/lan" /> : <Splash />)} />
        <PrivateRoute exact path="/lan" component={Lan} currentUser={props.currentUser} />
        <PrivateRoute exacct path="/lan/create" component={CreateLan} currentUser={props.currentUser} />
        <PrivateRoute path="/lan/id/:id" component={LanPage} currentUser={props.currentUser} />
        <Route component={fourohfour} />
      </Switch>
    </div>
  </Router>
);

PrivateRoute.defaultProps = {
  location: undefined,
  currentUser: undefined,
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  currentUser: PropTypes.objectOf(PropTypes.any),
  location: PropTypes.objectOf(PropTypes.any),
};

Routing.defaultProps = {
  currentUser: undefined,
};

Routing.propTypes = {
  currentUser: PropTypes.objectOf(PropTypes.any),
};

export default Routing;
