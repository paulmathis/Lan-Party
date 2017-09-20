import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

import Lans from '../../../api/lans.js';
import MemberList from './MemberList';
import getSteam from '../../../api/steam.js';

class LanPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      membersSteamInfo: [],
    };
  }

  componentWillMount() {
    const { lan, currentUser, history } = this.props;
    // If the lan doens't exist or the user is not a member of the lan redirect bcak to lan home
    if (lan === undefined || !lan.steamId.includes(currentUser.profile.id)) {
      history.push('/lan');
    }
  }

  componentDidMount() {
    // Get the steam info for all the members of the lan
    getSteam('GetPlayerSummaries', this.props.lan.steamId).then((res) => {
      this.setState({
        membersSteamInfo: res,
      });
    });
  }

  render() {
    return (
      <div>
        <MemberList membersSteamInfo={this.state.membersSteamInfo} />
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
