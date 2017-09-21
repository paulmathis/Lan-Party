import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Nav = props => (
  <div>
    <Link to="/lan">Home</Link>
    <Link to="/lan/create">Create</Link>
  </div>
);

Nav.propTypes = {};

export default Nav;
