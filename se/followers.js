
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('followers').del(),

    // Inserts seed entries
    knex('followers').insert([
      {
        id: 1,
        status:1,
        follower_id:knex.select('id').from('users').orderByRaw('rand()').limit(1),
        following_id:knex.select('id').from('users').orderByRaw('rand()').limit(1)
      },
      {
        id: 2,
        status:1,
        follower_id:knex.select('id').from('users').orderByRaw('rand()').limit(1),
        following_id:knex.select('id').from('users').orderByRaw('rand()').limit(1)
      },
      {
        id: 3,
        status:1,
        follower_id:knex.select('id').from('users').orderByRaw('rand()').limit(1),
        following_id:knex.select('id').from('users').orderByRaw('rand()').limit(1)
      },
      {
        id: 4,
        status:1,
        follower_id:knex.select('id').from('users').orderByRaw('rand()').limit(1),
        following_id:knex.select('id').from('users').orderByRaw('rand()').limit(1)
      }
      ]),
    knex('followers').insert(),
    knex('followers').insert(),
    knex('followers').insert()
  );
};
