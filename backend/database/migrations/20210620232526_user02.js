
exports.up = function(knex) {
    return knex.schema.createTable("user02", (table) => {
        table.increments("id").primary();
        table.string("name").notNull();
        table.string("email").notNull();
        table.string("password").notNull();
        table.string("image");
        table.boolean("writer")
        table.specificType('favoritos', 'integer ARRAY');        
        table.integer("phonenumber");
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable("user02");
};
