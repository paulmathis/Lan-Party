import React, { Component } from 'react';
import PropTypes from 'prop-types';

import getSteam from '../api/steam.js';

class SteamInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gamesList: [],
    };
    console.log(props);
  }

  componentDidMount() {
    getSteam('GetOwnedGames', this.props.steamId).then(res =>
      this.setState(
        {
          gamesList: res,
        },
        () => {
          console.log(this.state);
        },
      ),
    );
  }

  render() {
    return (
      <div>
        {this.props.steamId}
        {this.state.gamesList.map(game => <div>{game.name}</div>)}
      </div>
    );
  }
}

SteamInfo.propTypes = {
  steamId: PropTypes.string.isRequired,
};

export default SteamInfo;
