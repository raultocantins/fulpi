
exports.up = function (knex) {
    return knex.schema.createTable('historyDevelopment02', table => {
        table.increments('id').primary()
        table.string('name').notNull()
        table.string('image').notNull()
        table.text('prefacio').notNull()
        table.integer('score')
        table.string('escritor').notNull()
        table.timestamp('lancamento').notNull()
        table.string('genero').notNull()
        table.string('link').notNull()
        table.string('distribuidora').notNull()
        table.boolean('status').notNull()
        table.integer('userId').references('id')
             .inTable('user').notNull()


    })
};

exports.down = function (knex) {

    return knex.schema.dropTable('historyDevelopment02')
};