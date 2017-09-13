import React from 'react';
import { Link } from 'react-router-dom';

import LanList from './LanList';

const Lan = () => (
  <div>
    <Link to="/lan/create">Create Lan</Link>
    <LanList />
  </div>
);

export default Lan;
