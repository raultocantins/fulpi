
exports.up = function(knex) {
    return knex.schema.createTable("user", (table) => {
        table.increments("id").primary();
        table.string("name").notNull();
        table.string("email").notNull();
        table.string("password").notNull();
        table.string("image");
        table.boolean("writer")
        table.jsonb("favoritos");
        table.integer("phonenumber");
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable("user");
};
