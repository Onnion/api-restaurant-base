import {Server} from './src/server/server';
import {Router} from './src/common/router';
import {usersRouter} from './src/entities/users/users.router';

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
