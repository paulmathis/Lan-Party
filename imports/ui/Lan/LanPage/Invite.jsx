import React, { Component } from 'react';
import PropTypes from 'prop-types';

import getSteam from '../../../api/steam.js';

class Invite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friendsSteamInfo: [],
    };
  }

  componentDidMount() {
    console.log(this.props);
    // getSteam('GetPlayerSummaries', this.props.friends).then((res) => {
    //   console.log('test', res);
    //   this.setState({
    //     friendsSteamInfo: res,
    //   });
    // });
  }

  render() {
    const friends = this.props.friends.map(friend => <li>{friend.personaname}</li>);
    return (
      <div>
        <ul>{friends}</ul>
      </div>
    );
  }
}

Invite.propTypes = {};

export default Invite;
