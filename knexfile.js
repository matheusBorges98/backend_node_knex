require('dotenv').config()

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host:process.env.DB_HOST,
      database: process.env.DB_DATABASE,
      port:process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations:{
      tableName:('knex_migrations'),
      directory:'./source/database/migrations'
    },
    seeds:{
      directory:'./source/database/seeds'
    }
  },
};
