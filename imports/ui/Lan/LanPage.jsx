import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

import Lans from '../../api/lans.js';

class LanPage extends Component {
  componentWillMount() {
    const { lan, currentUser, history } = this.props;

    // If the lan doens't exist or the user is not a member of the lan redirect bcak to lan home
    if (lan === undefined || !lan.userId.includes(currentUser._id)) {
      history.push('/lan');
    }
  }
  render() {
    return <div>Yo</div>;
  }
}

LanPage.defaultProps = {
  lan: undefined,
};
LanPage.propTypes = {
  lan: PropTypes.objectOf(PropTypes.any),
  currentUser: PropTypes.objectOf(PropTypes.any).isRequired,
  history: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default createContainer(
  props => ({
    currentUser: Meteor.user(),
    lan: Lans.findOne({ _id: props.match.params.id }),
  }),
  LanPage,
);
