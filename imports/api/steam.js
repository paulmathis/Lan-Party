Meteor.methods({
  // The method expects a valid IPv4 address
  'steam.GetOwnedGames'(steamId) {
    const apiKey = Meteor.settings.steamApiKey;

    const response = HTTP.get(
      `http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${apiKey}&steamid=${steamId}&format=json&include_appinfo=1`
    ).data.response.games;

    return response;
  }
});