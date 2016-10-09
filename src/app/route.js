import Router from 'koa-router';

const publicRoute = new Router();
const securedRoute = new Router();

import rolesController from './controllers/roles-controller';
import usersController from './controllers/users-controller';
import uploadfileController from './controllers/uploadfile-controller';
import emailfileController from './controllers/email-controller';

publicRoute.prefix('/api/v1');
securedRoute.prefix('/api/v1');
/* user api */
publicRoute.post('/login', usersController.login);
publicRoute.get('/users', usersController.index);
publicRoute.post('/users', usersController.post); /* public */
/* role api */
publicRoute.get('/roles', rolesController.index);
securedRoute.post('/roles', rolesController.post);
securedRoute.put('/roles/:id', rolesController.put);
securedRoute.delete('/roles/:id', rolesController.destroy);
/* upload api*/
securedRoute.post('/upload', uploadfileController.uploadFile);

securedRoute.post('/email', emailfileController.email);

export default {
    publicRoute,
    securedRoute
};
