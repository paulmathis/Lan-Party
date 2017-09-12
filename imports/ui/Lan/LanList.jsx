import React from 'react';
import PropTypes from 'prop-types';
import { createContainer } from 'meteor/react-meteor-data';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';

import Lans from '../../api/lans.js';

const LanList = (props) => {
  console.log(props);
  return (
    <ul>
      {props.lans.map(lan => (
        <li key={lan._id}>
          <Link to={`/lan/id/${lan._id}`}>
            <h1>{lan.name}</h1>
          </Link>
          <h2>{moment(lan.datetime).format()}</h2>
        </li>
      ))}
    </ul>
  );
};

LanList.propTypes = {};

export default createContainer(
  () => ({
    lans: Lans.find({ userId: Meteor.user()._id }).fetch(),
  }),
  LanList,
);
