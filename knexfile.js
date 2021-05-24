// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database:"knex_test",
      user:"postgres",
      password:"root",
    },
    migrations:{
      tableName:('knex_migrations'),
      directory:'/node_knex/source/database/migrations'
    },
    seeds:{
      directory:'/node_knex/source/database/seeds'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
