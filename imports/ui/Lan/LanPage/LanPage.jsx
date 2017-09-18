import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

import Lans from '../../../api/lans.js';
import MemberList from './MemberList';

class LanPage extends Component {
  componentWillMount() {
    const { lan, currentUser, history } = this.props;
    // If the lan doens't exist or the user is not a member of the lan redirect bcak to lan home
    if (lan === undefined || !lan.steamId.includes(currentUser.profile.id)) {
      history.push('/lan');
    }
  }
  render() {
    return (
      <div>
        <MemberList memberIds={this.props.lan.steamId} />
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
