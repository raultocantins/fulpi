
module.exports = {
  client: 'postgresql',
  connection: {
    database: 'fulpidb',
    user:     'postgres',
    password: '3571592486'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  
}

};