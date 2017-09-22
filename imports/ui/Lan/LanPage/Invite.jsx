import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FriendsList from './FriendsList';

class Invite extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <FriendsList friends={this.props.friends} />
      </div>
    );
  }
}

Invite.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Invite;
