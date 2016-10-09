import {UserFactory} from './../models/user';
import jwt from 'koa-jwt';
import {jwtSecret} from './../../global_config';
import parse from 'co-body';

const index = async function (ctx) {
         /*
        UserFactory.all() returns a Promise, so we can use yield here
    */
    [ctx.status, ctx.body] = await UserFactory.all();
};

const post = async function (ctx) {
    const user = await parse.json(ctx);
    [ctx.status, ctx.body] = await UserFactory.insert(user);
};

const login = async function (ctx) {
    const loginInfo = await parse.json(ctx);
    const userExist = await UserFactory.userExist(loginInfo);
    if (userExist[0] === 200) {
        const userdata = userExist[1];
        const tokenObj = {
            token_type: 'Bearer',
            token: jwt.sign(userdata, jwtSecret)
        };
        [ctx.status, ctx.body] = [200, tokenObj];
    } else {
        [ctx.status, ctx.body] = [403, 'username or password not matched!!!'];
    }
};
export default {
    index,
    post,
    login
};
