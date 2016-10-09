
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('communities').del(),

    // Inserts seed entries
    knex('communities').insert([{
      id: 1,
      user_name: 'Moni Saha',
      name:'Bangladesh Press Club',
      logo:'bangladeshPressClub',
      desc:'This is Bangladesh Press Club community',
      status:1,

    },
    {
      id: 2,
      user_name: 'Crise',
      name:'Silicon vally Community',
      logo:'siliconvallycommunity',
      desc:'This is Silicon vally Tech Community',
      status:1,

    },
    {
      id: 3,
      user_name: 'Sherlock',
      name:'Landon Press Club',
      logo:'londonpressclub',
      desc:'This is Landon Press Club community',
      status:1,

    },
    {
      id: 4,
      user_name: 'Jone',
      name:'Sydney Press Club',
      logo:'sydneypressclub',
      desc:'This is Sydney Press Club',
      status:1,

    }
  ]),
    knex('communities').insert(),
    knex('communities').insert(),
    knex('communities').insert()
  );
};
