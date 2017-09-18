import React from 'react';
import PropTypes from 'prop-types';

import Member from './Member';

const MemberList = (props) => {
  const members = props.memberIds.map(memberId => <Member key={memberId} memberId={memberId} />);

  return <ul>{members}</ul>;
};

MemberList.propTypes = {
  memberIds: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MemberList;
