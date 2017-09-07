import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

function getSteam(steamId) {
  return new Promise(function(resolve) {
    Meteor.call('steam.GetOwnedGames', steamId, (err, res) => {
      resolve(res);
    });
  });
}

class SteamInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gamesList: []
    };
    console.log(props);
  }

  componentDidMount() {
    getSteam(this.props.steamId).then(res => {
      this.setState(
        {
          gamesList: res
        },
        () => {
          console.log(this.state);
        }
      );
    });
  }

  render() {
    return (
      <div>
        {this.props.steamId}
        {this.state.gamesList.map(game => {
          return <div>{game.name}</div>;
        })}
      </div>
    );
  }
}

export default SteamInfo;