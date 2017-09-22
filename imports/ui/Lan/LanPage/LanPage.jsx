import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

import Lans from '../../../api/lans.js';
import MemberList from './MemberList';
import getSteam from '../../../api/steam.js';
import Invite from './Invite';

class LanPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      membersSteamInfo: [],
      friends: [],
    };
  }

  componentWillMount() {
    const { lan, currentUser, history } = this.props;
    // If the lan doens't exist or the user is not a member of the lan redirect bcak to lan home
    if (lan === undefined || !lan.steamId.includes(currentUser.profile.id)) {
      history.push('/lan');
    }

    // Get the steam info for all the members of the lan
    getSteam('GetPlayerSummaries', this.props.lan.steamId).then((res) => {
      this.setState({
        membersSteamInfo: res,
      });
    });

    // Get current users friends list
    getSteam('GetFriendList', this.props.currentUser.profile.id).then((res) => {
      this.setState({
        friends: res,
      });
    });
  }

  render() {
    // Only render friends if thiers more than 0
    const renderFriends = this.state.friends.length > 0;
    return (
      <div>
        <MemberList membersSteamInfo={this.state.membersSteamInfo} />
        {renderFriends ? <Invite friends={this.state.friends} /> : ''}
      </div>
    );
  }
}

LanPage.defaultProps = {
  lan: undefined,
};

LanPage.propTypes = {
  lan: PropTypes.objectOf(PropTypes.any),
  currentUser: PropTypes.objectOf(PropTypes.any).isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default createContainer(
  props => ({
    currentUser: Meteor.user(),
    lan: Lans.findOne({ _id: props.match.params.id }),
  }),
  LanPage,
);
