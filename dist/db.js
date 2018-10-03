'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var environment = process.env.NODE_ENV || 'development'; // if something else isn't setting ENV, use development
var configuration = require('./knexfile')[environment]; // require environment's settings from knexfile
var database = require('knex')(configuration); // connect to DB via knex using env's settings

exports.default = database;