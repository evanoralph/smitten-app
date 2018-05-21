// Server entry point, imports all server code

import '/imports/startup/server';
import '/imports/startup/both';
import { Meteor } from 'meteor/meteor';

const { smtpMail, password, server, port } = Meteor.settings.mail_smtp;

process.env.MAIL_URL =
  'smtps://' +
  encodeURIComponent(smtpMail) +
  ':' +
  encodeURIComponent(password) +
  '@' +
  encodeURIComponent(server) +
  ':' +
  port;
