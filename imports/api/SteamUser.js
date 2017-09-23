import { Mongo } from 'meteor/mongo';

const SteamUser = new Mongo.Collection('steamUser');

SteamUser.schema = new SimpleSchema({
  steamId: { type: String },
  invitations: { type: [String] },
});

SteamUser.attachSchema(SteamUser.schema);

export { SteamUser as default };
