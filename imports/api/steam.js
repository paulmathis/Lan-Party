import { check } from 'meteor/check';
import { HTTP } from 'meteor/http';
import { Meteor } from 'meteor/meteor';

if (Meteor.server) {
  const apiKey = Meteor.settings.steamApiKey;
  Meteor.methods({
    // Get a list of steam games owned for given steamid
    'steam.GetOwnedGames'(steamId) {
      check(steamId, String);

      const response = HTTP.get(
        `http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${apiKey}&steamid=${steamId}&format=json&include_appinfo=1`,
      ).data.response.games;

      return response;
    },
    'steam.GetPlayerSummaries'(steamId) {
      console.log(steamId);
      check(steamId, [String]);

      // Create string to pass to GetPlayersSummaries
      // TODO Bring inside of GetPlayerSummaries directly
      // const idString = this.props.lan.steamId.join(', ');

      const response = HTTP.get(
        `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${apiKey}&steamids=${steamId}&format=json`,
      );

      return response.data.response.players;
    },
  });
}

// Wrap method.call in promise function
// Takes in method name and steam ID
function getSteam(method, steamId) {
  return new Promise((resolve) => {
    Meteor.call(`steam.${method}`, steamId, (err, res) => {
      resolve(res);
    });
  });
}

export default getSteam;
