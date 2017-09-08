import { check } from 'meteor/check';
import { HTTP } from 'meteor/http';
import { Meteor } from 'meteor/meteor';

if (Meteor.server) {
  Meteor.methods({
    // Get a list of steam games owned for given steamid
    'steam.GetOwnedGames'(steamId) {
      check(steamId, 'string');
      const apiKey = Meteor.settings.steamApiKey;

      const response = HTTP.get(
        `http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${apiKey}&steamid=${steamId}&format=json&include_appinfo=1`,
      ).data.response.games;

      return response;
    },
  });
}

// Wrap method.call in promise function
// Takes in method name and steam ID
function getSteam(method, steamId) {
  return new Promise((resolve) => {
    Meteor.call(`steam.${method}`, steamId, (err, res) => {
      console.log(err);
      resolve(res);
    });
  });
}

export default getSteam;
