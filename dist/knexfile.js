'use strict';

var _development, _test, _production;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Update with your config settings.

module.exports = {
  development: (_development = {
    client: 'pg',
    connection: 'postgres://localhost/eq-dev',
    migrations: {
      directory: '../db/migrations'
    },
    seeds: {
      directory: '../db/seeds/dev'
    }
  }, _defineProperty(_development, 'migrations', {
    tableName: 'knex_migrations'
  }), _defineProperty(_development, 'useNullAsDefault', true), _development),

  test: (_test = {
    client: 'pg',
    connection: 'postgres://localhost/eq-test',
    migrations: {
      directory: '../db/migrations'
    },
    seeds: {
      directory: '../db/seeds/test'
    }
  }, _defineProperty(_test, 'migrations', {
    tableName: 'knex_migrations'
  }), _defineProperty(_test, 'useNullAsDefault', true), _test),

  production: (_production = {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: '../db/migrations'
    },
    seeds: {
      directory: '../db/seeds/production'
    }
  }, _defineProperty(_production, 'migrations', {
    tableName: 'knex_migrations'
  }), _defineProperty(_production, 'useNullAsDefault', true), _production)
};