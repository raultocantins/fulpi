
exports.up = function (knex) {
    return knex.schema.createTable('historyfull', table => {
        table.increments('id').primary()
        table.string('name').notNull()
        table.string('image').notNull()
        table.text('describe').notNull()
        table.integer('favorite')
        table.integer('likes')
        table.string('writer').notNull()
        table.timestamp('writtenin').notNull()
        table.string('genre').notNull()
        table.string('link').notNull()
        table.string('publisher').notNull()
        table.boolean('status').notNull()
        table.timestamp('createdAt').notNull()
        table.integer('userId').references('id')
             .inTable('user02').notNull()

    })
};

exports.down = function (knex) {

    return knex.schema.dropTable('historyfull')
};