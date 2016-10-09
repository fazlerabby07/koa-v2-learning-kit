/*
  This module is exported to reference app object elsewhere.

  DO NOT bind middlewares here.
*/

import Koa from 'koa';
import cors from 'kcors';
const app = new Koa();


app.use(cors());


export default app;
