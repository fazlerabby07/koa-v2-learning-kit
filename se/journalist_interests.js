
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('journalist_interests').del(),

    // Inserts seed entries
    knex('journalist_interests').insert({
      id: 1,
      name: 'technology',
      status:1,
      category_id:knex.select('id').from('categories').orderByRaw('rand()').limit(1),
      user_id:knex.select('id').from('users').orderByRaw('rand()').limit(1)
    }),
    knex('journalist_interests').insert({
      id: 2,
      name: 'weather',
      status:1,
      category_id:knex.select('id').from('categories').orderByRaw('rand()').limit(1),
      user_id:knex.select('id').from('users').orderByRaw('rand()').limit(1)
    }),
    knex('journalist_interests').insert({
      id: 3,
      name: 'country',
      status:1,
      category_id: knex.select('id').from('categories').orderByRaw('rand()').limit(1),
      user_id: knex.select('id').from('users').orderByRaw('rand()').limit(1)
    }),
    knex('journalist_interests').insert({
      id: 3,
      name: 'sports',
      status:1,
      category_id: knex.select('id').from('categories').orderByRaw('rand()').limit(1),
      user_id: knex.select('id').from('users').orderByRaw('rand()').limit(1)
    })
  );
};
