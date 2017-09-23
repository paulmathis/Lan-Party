import React, { Component } from 'react';
import PropTypes from 'prop-types';
import object from 'lodash/fp/object';

import Friend from './Friend';

class FriendsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inviteList: {},
    };

    this.addInvite = this.addInvite.bind(this);
  }

  addInvite(invitee) {
    // Create temp object to change invitation state
    const tempList = this.state.inviteList;
    tempList[invitee] = !tempList[invitee];
    // Update state
    this.setState({
      inviteList: tempList,
    });

    // If there's a selection pass this status back to the invite button
    const inviteable = object.values(tempList).includes(true);
    this.props.toggleInviteButton(inviteable);
  }

  render() {
    // Map otu friends list into friend components
    const friends = this.props.friends.map((friend) => {
      // Render friend component with invitation state passed down
      const clicked = this.state.inviteList[friend.steamid];
      return <Friend addInvite={this.addInvite} clicked={clicked} key={friend.steamid} friend={friend} />;
    });
    return (
      <div
        style={{
          maxHeight: '400px',
          maxWidth: '400px',
          overflowY: 'scroll',
        }}
      >
        <div className="list-group">{friends}</div>
      </div>
    );
  }
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
  toggleInviteButton: PropTypes.func.isRequired,
};

export default FriendsList;
