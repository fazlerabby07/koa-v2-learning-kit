
exports.seed = function(knex, Promise) {
  return Promise.join(



    

    knex('categories').insert(),
    knex('categories').insert()
  );
};
