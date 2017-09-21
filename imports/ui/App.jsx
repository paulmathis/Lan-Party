import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import Loader from 'react-loader';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

import Routing from './Routing';
import AccountsUIWrapper from './AccountsUIWrapper';

// Wraps all pages in a loader while it logs you in
const App = props => (
  <div>
    <Loader loaded={!props.loggingIn} length={0} scale={2} radius={20} lines={9} width={14}>
      <AccountsUIWrapper />
      <Routing currentUser={props.currentUser} />
    </Loader>
  </div>
);

App.defaultProps = {
  currentUser: undefined,
};

App.propTypes = {
  loggingIn: PropTypes.bool.isRequired,
  currentUser: PropTypes.objectOf(PropTypes.any),
};

export default createContainer(
  () => ({
    currentUser: Meteor.user(),
    loggingIn: Meteor.loggingIn(),
  }),
  App,
);
