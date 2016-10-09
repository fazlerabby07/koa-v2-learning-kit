
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('messages').del(),

    // Inserts seed entries
    knex('messages').insert({
      id: 1,
      message: 'hello World to you',
      content_type:'demo',
      content_url:'http://google.com',
      status:1,
      sender_id:knex.select('id').from('users').orderByRaw('rand()').limit(1),
      receiver_id:knex.select('id').from('users').orderByRaw('rand()').limit(1)

    }),
    knex('messages').insert({
      id: 2,
      message: 'hello World to me',
      content_type:'demo',
      content_url:'http://google.com',
      status:1,
      sender_id:knex.select('id').from('users').orderByRaw('rand()').limit(1),
      receiver_id:knex.select('id').from('users').orderByRaw('rand()').limit(1)
    }),
    knex('messages').insert({
      id: 3,
      message: 'hello World all',
      content_type:'demo',
      content_url:'http://google.com',
      status:1,
      sender_id:knex.select('id').from('users').orderByRaw('rand()').limit(1),
      receiver_id:knex.select('id').from('users').orderByRaw('rand()').limit(1)
    }),
    knex('messages').insert({
      id: 4,
      message: 'hello World',
      content_type:'demo',
      content_url:'http://google.com',
      status:1,
      sender_id:knex.select('id').from('users').orderByRaw('rand()').limit(1),
      receiver_id:knex.select('id').from('users').orderByRaw('rand()').limit(1)
    })
  );
};
