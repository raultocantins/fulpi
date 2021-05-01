require('dotenv').config()
const knex = require('knex')({
    client: 'pg',
    version: '7.2',
    connection: {
      host : '127.0.0.1',
      user : process.env.USER_DATABASE,
      password : process.env.USER_DATABASE_PASSWORD,
      database : process.env.DATABASE
    }
  });

  module.exports=knex