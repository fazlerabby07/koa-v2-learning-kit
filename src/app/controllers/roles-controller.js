import {RoleFactory} from './../models/role';
import parse from 'co-body';

const index = async function (ctx) {
    [ctx.status, ctx.body] = await RoleFactory.all();
};

const getAll = async function (ctx) {
    [ctx.status, ctx.body] = await RoleFactory.all();
};


const post = async function (ctx) {
    const role = await parse.json(ctx);
    // destructing
    [ctx.status, ctx.body] = await RoleFactory.insert(role);
};

const put = async function (ctx) {
    const id = ctx.params.id;
    const role = await parse.json(ctx);
    // destructing
    [ctx.status, ctx.body] = await RoleFactory.update(id, role);
};

const destroy = async function (ctx) {
    const id = ctx.params.id;
    [ctx.status, ctx.body] = await RoleFactory.delete(id);
};

export default {
    index,
    getAll,
    post,
    put,
    destroy
};
