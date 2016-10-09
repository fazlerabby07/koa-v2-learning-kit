exports.up = function(knex) {
    return knex.schema.createTable('users', function(table) {
        table.increments('id').primary();
        table.string('email', 50).notNullable().unique();
        table.string('user_name', 100).notNullable().unique();
        table.string('password').notNullable();
        table.string('first_name');
        table.string('last_name');
        table.string('gender', 10);
        table.text('about_me');
        table.boolean('status').defaultTo(0);
        table.string('profile_pic_url', 255);
        table.integer('role_id').unsigned().references('roles.id')
                    .onDelete('CASCADE').onUpdate('CASCADE');
        table.timestamps();
        table.timestamp('deleted_at').nullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
