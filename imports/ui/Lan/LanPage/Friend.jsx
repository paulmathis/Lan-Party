import React from 'react';
import PropTypes from 'prop-types';

const Friend = (props) => {
  function handleClick() {
    props.addInvite(props.friend.steamid);
  }
  const active = props.clicked ? 'active' : '';
  return (
    <button onClick={handleClick} className={`list-group-item list-group-item-action ${active}`}>
      <img src={props.friend.avatar} alt="avatar" />
      {props.friend.personaname}
    </button>
  );
};

Friend.defaultProps = {
  clicked: false,
};

Friend.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    personaname: PropTypes.string.isRequired,
    steamid: PropTypes.string.isRequired,
  }).isRequired,
  clicked: PropTypes.bool,
  addInvite: PropTypes.func.isRequired,
};

export default Friend;
