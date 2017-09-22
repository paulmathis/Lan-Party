import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <div>
    <Link to="/lan">Home</Link>
    <Link to="/lan/create">Create</Link>
  </div>
);

export default Nav;
