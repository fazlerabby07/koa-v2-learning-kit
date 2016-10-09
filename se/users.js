
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(),

    // Inserts seed entries
    knex('users').insert({
      id: 1,
      email: 'test1@gmail.com',
      user_name: 'test1',
      password: '12345',
      first_name: 'first test1',
      last_name: 'last test1',
      gender: 'male',
      about_me: "This is test1",
      status: 1,
      role_id: knex.select('id').from('roles').orderByRaw('rand()').limit(1)
    }),
    knex('users').insert({
      id: 2,
      email: 'test2@gmail.com',
      user_name: 'test2',
      password: '12345',
      first_name: 'first test2',
      last_name: 'last test2',
      gender: 'male',
      about_me: "This is test2",
      status: 1,
      role_id: knex.select('id').from('roles').orderByRaw('rand()').limit(1)
    }),
    knex('users').insert({
      id: 3,
      email: 'test3@gmail.com',
      user_name : 'test3',
      password: '12345',
      first_name: 'first test3',
      last_name: 'last test3',
      gender: 'male',
      about_me: "This is test3",
      status: 1,
      role_id: knex.select('id').from('roles').orderByRaw('rand()').limit(1)
    })
  );
};
