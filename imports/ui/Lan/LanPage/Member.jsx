import React from 'react';
import PropTypes from 'prop-types';

const Member = props => <li>{props.alias}</li>;

Member.propTypes = {
  alias: PropTypes.string.isRequired,
};

export default Member;
