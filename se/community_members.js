
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('community_members').del(),

    // Inserts seed entries
    knex('community_members').insert([
      {
        id: 1,
        status: 1,
        community_id:knex.select('id').from('communities').orderByRaw('rand()').limit(1),
        user_id:knex.select('id').from('users').orderByRaw('rand()').limit(1),
        role:'Admin'
      },
      {
        id: 2,
        status: 1,
        community_id:knex.select('id').from('communities').orderByRaw('rand()').limit(1),
        user_id:knex.select('id').from('users').orderByRaw('rand()').limit(1),
        role:'Admin'
      },
      {
        id: 3,
        status: 1,
        community_id:knex.select('id').from('communities').orderByRaw('rand()').limit(1),
        user_id:knex.select('id').from('users').orderByRaw('rand()').limit(1),
        role:'Admin'
      },
      {
        id: 4,
        status: 1,
        community_id:knex.select('id').from('communities').orderByRaw('rand()').limit(1),
        user_id:knex.select('id').from('users').orderByRaw('rand()').limit(1),
        role:'Member'
      },
      {
        id: 5,
        status: 1,
        community_id:knex.select('id').from('communities').orderByRaw('rand()').limit(1),
        user_id:knex.select('id').from('users').orderByRaw('rand()').limit(1),
        role:'Member'
      }
  ]),
  );
};
