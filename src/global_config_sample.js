/*
  Local Configuration management:

  1. Create a copy of this file in the same directory
  2. Rename the new file to global_config.js

  global_config.js will be ignored in VCS so that each developer
  can have their own configurtion
*/

const globalConfig = {
    environment: 'DEVELOPMENT', // DEVELOPMENT, PRODUCTION
    port: 3000,
    mysql: {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'database_name',
        charset: 'utf8',
        debug: true
    },
    jwtSecret: 'logintest'

};

export default globalConfig;
