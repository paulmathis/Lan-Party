import { Mongo } from 'meteor/mongo';

const Lans = new Mongo.Collection('lans');

Lans.schema = new SimpleSchema({
  name: { type: String },
  datetime: { type: Date },
  steamId: { type: [String] },
  owner: { type: String },
});

Lans.attachSchema(Lans.schema);

export { Lans as default };
