import React from 'react';
import PropTypes from 'prop-types';
import { createContainer } from 'meteor/react-meteor-data';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';

import Lans from '../../api/Lans.js';

const LanItem = ({ lan }) => (
  <li>
    <Link to={`/lan/id/${lan._id}`}>
      <h1>{lan.name}</h1>
    </Link>
    <h2>{moment(lan.datetime).format()}</h2>
  </li>
);

const LanList = (props) => {
  // Map through all lans
  const lans = props.lans.map(lan => <LanItem key={lan._id} lan={lan} />);
  return <ul>{lans}</ul>;
};

LanList.defaultProps = {
  lans: [],
};
LanList.propTypes = {
  lans: PropTypes.arrayOf(PropTypes.object),
};

export default createContainer(
  () => ({
    lans: Lans.find({ steamId: Meteor.user().profile.id }).fetch(),
  }),
  LanList,
);
