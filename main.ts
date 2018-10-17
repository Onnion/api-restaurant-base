import {Server} from './server/server';
import {Router} from './common/router';
import {usersRouter} from './entities/users/users.router';

const server = new Server();

const routers: Router[] = [
    usersRouter
]


server.boostrap(routers)
.then( (server) => {
    console.log('Server is listening on: ', server.application.address);

})
.catch( (error) => {
    console.log('error server: ', error);
});
