import { Meteor } from 'meteor/meteor';

import '../imports/startup/service-config';

Meteor.publish('test', () => {
  return 'apple';
});