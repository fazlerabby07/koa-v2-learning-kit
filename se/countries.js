
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('countries').del(),

    // Inserts seed entries
    knex('countries').insert({id: 1, name: 'Bangladesh',status:1}),
    knex('countries').insert({id: 2, name: 'Australia',status:1}),
    knex('countries').insert({id: 3, name: 'USA',status:1}),
    knex('countries').insert({id: 4, name: 'Brazil',status:1}),
    knex('countries').insert({id: 5, name: 'Switzerland',status:1}),
    knex('countries').insert({id: 6, name: 'Chile',status:1}),
    knex('countries').insert({id: 7, name: 'Germany',status:1}),
    knex('countries').insert({id: 8, name: 'Egypt',status:1}),
    knex('countries').insert({id: 9, name: 'Spain',status:1}),
    knex('countries').insert({id: 10, name: 'France',status:1}),
    knex('countries').insert({id: 11, name: 'Greece',status:1}),
    knex('countries').insert({id: 12, name: 'Italy',status:1}),
    knex('countries').insert({id: 13, name: 'India',status:1}),
    knex('countries').insert({id: 14, name: 'Japan',status:1}),
    knex('countries').insert({id: 15, name: 'Sri Lanka',status:1})
  );

};
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('states').del(),

    // Inserts seed entries
    knex('states').insert({id: 1,name: 'Dhaka',status:1,country_id:1}),
    knex('states').insert({id: 2,name: 'Silicon vally',status:1,country_id:3}),
    knex('states').insert({id: 3,name: 'Sydne',status:1,country_id:2}),
    knex('states').insert({id: 4,name: 'Barcelona', status:1,country_id:9})
    );
};

exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('cities').del(),

    // Inserts seed entries
    knex('cities').insert({id: 1, name: 'Bangla Motor',status:1,state_id:1}),
    knex('cities').insert({id: 2, name: 'Surry Hills',status:1,state_id:3}),
    knex('cities').insert({id: 3, name: 'Mountain View',status:1,state_id:2}),
    knex('cities').insert({id: 4, name: 'park guell',status:1,state_id:4})
  );
};
