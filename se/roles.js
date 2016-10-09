exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('roles').del(),

    // Inserts seed entries
    knex('roles').insert({id: 1, name: 'admin', status: 1}),
    knex('roles').insert({id: 2, name: 'users', status: 1}),
    knex('roles').insert({id: 3, name: 'guest', status: 1}),
    knex('roles').insert({id: 4, name: 'journalist', status: 1}),
    knex('roles').insert({id: 5, name: 'normal', status: 1})
  );

};
