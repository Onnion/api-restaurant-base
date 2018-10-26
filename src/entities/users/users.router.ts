import {Resource} from './../../common/resource';
import * as restifyRouter from 'restify-router';
import * as restify from 'restify';

class UsersRouter extends Resource {
    entity = 'users';

    private _router = new restifyRouter.Router();



}

export const usersRouter = new UsersRouter();