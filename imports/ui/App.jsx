import React, { Component } from "react";
import { createContainer } from "meteor/react-meteor-data";

import Routing from "./Routing";
import AccountsUIWrapper from "./AccountsUIWrapper";
import SteamInfo from "./SteamInfo";

class App extends Component {
  render() {
    return (
      <div>
        <AccountsUIWrapper />
        <Routing />
      </div>
    );
  }
}

export default createContainer(() => {
  return {
    currentUser: Meteor.user()
  };
}, App);
