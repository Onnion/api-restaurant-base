import {Resource} from './../../common/resource';

class UsersRouter extends Resource {
    entity = 'users';

}

export const usersRouter = new UsersRouter();