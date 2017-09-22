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

      // TODO: Have it only pass on necessary information
      return response;
    },
    'steam.GetPlayerSummaries'(steamId) {
      check(steamId, [String]);

      const response = HTTP.get(
        `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${apiKey}&steamids=${steamId}&format=json`,
      ).data.response.players;

      // TODO: Have it only pass on necessary information
      return response;
    },
    'steam.GetFriendList'(steamId) {
      check(steamId, String);

      const firstResponse = HTTP.get(
        `http://api.steampowered.com/ISteamUser/GetFriendList/v0001/?key=${apiKey}&steamid=${steamId}&relationship=friend`,
      ).data.friendslist.friends;

      // Returns just the steam ID's
      const friendsSteamIds = firstResponse.map(friend => friend.steamid);

      // Call for full player summaries to return
      return Meteor.call('steam.GetPlayerSummaries', friendsSteamIds);
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
