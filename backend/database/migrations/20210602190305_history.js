
exports.up = function(knex) {
    return knex.schema.createTable('history',table=>{
        table.increments('id').primary()
        table.string('name').notNull()
        table.string('image').notNull()      
        table.jsonb('data') .notNull()
        table.integer('duration').notNull()
        table.integer('genreId').references('id')
        .inTable('genres').notNull()  
         
      })

};

exports.down = function(knex) {
    return knex.schema.dropTable('history')
};
