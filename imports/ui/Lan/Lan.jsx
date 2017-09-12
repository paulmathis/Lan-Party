import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import LanList from './LanList';

class Lan extends Component {
  render() {
    return (
      <div>
        <Link to="/lan/create">Create Lan</Link>
        <LanList />
      </div>
    );
  }
}

Lan.propTypes = {};

export default Lan;
