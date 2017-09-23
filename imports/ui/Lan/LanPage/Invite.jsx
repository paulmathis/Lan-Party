import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FriendsList from './FriendsList';

class Invite extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inviteable: false,
    };

    this.toggleInviteButton = this.toggleInviteButton.bind(this);
  }

  toggleInviteButton(status) {
    this.setState({
      invitable: status,
    });
  }

  render() {
    console.log(props.lan);
    return (
      <div>
        <FriendsList toggleInviteButton={this.toggleInviteButton} friends={this.props.friends} />
        <button className="btn btn-primary" disabled={!this.state.invitable}>
          Invite
        </button>
      </div>
    );
  }
}

Invite.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Invite;
