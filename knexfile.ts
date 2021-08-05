// Update with your config settings.
import dotenv from 'dotenv';
dotenv.config();

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host: process.env.HOST,
      port: 3306,
      user: process.env.USER,
      password: process.env.PASSWORD,
      database: process.env.DB
    },
    migrations: {
      directory: __dirname + '/src/data/migrations'
    }
  },

  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },

  production: {
    client: 'mysql',
    connection: {
      host: process.env.HOST,
      port: 3306,
      user: process.env.USER,
      password: process.env.PASSWORD,
      database: process.env.DB
    },
    migrations: {
      directory: __dirname + '/src/data/migrations'
    }
  }

};
