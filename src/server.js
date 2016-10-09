import bodyParser from 'koa-bodyparser';
import jwt from 'koa-jwt';
import convert from 'koa-convert';
import {port} from './global_config';
import app from './app/app';
import {securedRoute, publicRoute} from './app/route';

app.use(bodyParser());
app.use(publicRoute.routes());
app.use(publicRoute.allowedMethods());

app.use(convert(jwt({ secret: 'logintest' })));

app.use(securedRoute.routes());
app.use(securedRoute.allowedMethods());

// Start server
app.listen(port || 3000);
