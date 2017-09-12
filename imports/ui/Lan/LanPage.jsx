import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

import Lans from '../../api/lans.js';

class LanPage extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    console.log(this.props);
    if (!this.props.lan.userId.includes(this.props.currentUser._id)) {
      console.log('test');
      this.props.history.push('/lan');
    }
  }
  render() {
    return <div>Yo</div>;
  }
}

LanPage.propTypes = {};

export default createContainer(
  props => ({
    currentUser: Meteor.user(),
    lan: Lans.findOne({ _id: props.match.params.id }),
  }),
  LanPage,
);
