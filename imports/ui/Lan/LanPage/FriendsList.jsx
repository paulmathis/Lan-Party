import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
};

export default FriendsList;
