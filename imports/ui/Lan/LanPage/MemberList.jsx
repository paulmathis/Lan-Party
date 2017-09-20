import React from 'react';
import PropTypes from 'prop-types';

import Member from './Member';

const MemberList = (props) => {
  const members = props.membersSteamInfo.map(member => (
    <Member key={member.steamid} memberId={member.steamid} alias={member.personaname} />
  ));

  return <ul>{members}</ul>;
};

MemberList.propTypes = {
  membersSteamInfo: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default MemberList;
