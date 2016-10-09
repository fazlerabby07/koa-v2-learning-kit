// Database configuration

/*
  Please make sure the file is present.

  A sample has been provided as [project_root]/src/global_config_sample.js
*/
import {mysql} from './../global_config';


const config = {
    client: 'mysql',
    connection: {
        host: mysql.host || '127.0.0.1',
        user: mysql.user || 'root',
        password: mysql.password || '',
        database: mysql.database || 'newselo_v1',
        charset: mysql.charset || 'utf8'
    },
    debug: true
};

export default config;
