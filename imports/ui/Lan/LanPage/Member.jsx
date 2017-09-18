import React from 'react';
import PropTypes from 'prop-types';

import getSteam from '../../../api/steam.js';

const Member = (props) => {
  console.log(props);
  getSteam('GetPlayerSummaries', props.memberId).then((res) => {
    console.log(res);
  });
  return <li>{props.memberId}</li>;
};

Member.propTypes = {
  memberId: PropTypes.string.isRequired,
};

export default Member;
