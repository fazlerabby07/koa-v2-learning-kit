exports.up = function(knex) {
    return knex.schema.createTable('roles', function(table) {
        table.increments('id').primary();
        table.string('name', 100).notNullable().unique();
        table.boolean('status').defaultTo(0);
        table.timestamps();
        table.timestamp('deleted_at').nullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('roles');
};
