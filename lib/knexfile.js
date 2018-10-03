// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection:'postgres://localhost/eq-dev',
    migrations: {
      directory: '../db/migrations'
    },
    seeds: {
      directory: '../db/seeds/dev'
    },
    migrations: {
      tableName: 'knex_migrations'
    }, 
    useNullAsDefault: true
  },

  test: {
    client: 'pg',
    connection:'postgres://localhost/eq-test',
    migrations: {
      directory: '../db/migrations'
    },
    seeds: {
      directory: '../db/seeds/test'
    },
    migrations: {
      tableName: 'knex_migrations'
    }, 
    useNullAsDefault: true
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: '../db/migrations'
    },
    seeds: {
      directory: '../db/seeds/production'
    },
    migrations: {
      tableName: 'knex_migrations'
    }, 
    useNullAsDefault: true
  }
}

