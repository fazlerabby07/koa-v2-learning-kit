/*
  Knex uses connection pooling. So it is important to instantiate it
  once and use that everywhere else.
*/

import knex from 'knex';
import bookshelf from 'bookshelf';
import config from './../../config/db';

const queryBuilder = knex(config);

const orm = bookshelf(queryBuilder);

// https://github.com/tgriesser/bookshelf/wiki/Plugin:-Model-Registry
orm.plugin('registry');

// https://github.com/tgriesser/bookshelf/wiki/Plugin:-Virtuals
orm.plugin('virtuals');

// https://github.com/tgriesser/bookshelf/wiki/Plugin:-Visibility
orm.plugin('visibility');

export default orm;
