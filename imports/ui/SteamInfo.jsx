import React, { Component } from "react";
import { createContainer } from "meteor/react-meteor-data";

import getSteam from "../api/steam.js";

class SteamInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gamesList: []
    };
    console.log(props);
  }

  componentDidMount() {
    getSteam("GetOwnedGames", this.props.steamId).then(res => {
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
