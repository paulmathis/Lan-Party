import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import AccountsUIWrapper from './AccountsUIWrapper';
import SteamInfo from './SteamInfo';

class App extends Component {
  render() {
    return (
      <div>
        <AccountsUIWrapper />
        {this.props.currentUser ? <SteamInfo steamId={this.props.currentUser.profile.id} /> : <h1>Not Logged In </h1>}
      </div>
    );
  }
}

console.log(Meteor.subscribe('test'));
export default createContainer(() => {
  return {
    currentUser: Meteor.user()
  };
}, App);