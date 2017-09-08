import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import Loader from 'react-loader';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';

import Routing from './Routing';
import AccountsUIWrapper from './AccountsUIWrapper';
// import SteamInfo from './SteamInfo';

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
