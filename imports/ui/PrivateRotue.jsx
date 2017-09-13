import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

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

PrivateRoute.defaultProps = {
  location: undefined,
  currentUser: undefined,
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  currentUser: PropTypes.objectOf(PropTypes.any),
  location: PropTypes.objectOf(PropTypes.any),
};

export default createContainer(
  () => ({
    currentUser: Meteor.user(),
  }),
  PrivateRoute,
);
