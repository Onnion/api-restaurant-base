import * as restify from 'restify';
import {Router} from './../common/router';

export class Server {

    private _application: restify.Server;
  
    
    constructor() { }


    public get application(): restify.Server {
        return this._application;
    }
    

    public async initRoutes(routers: Router[]): Promise<any> {
        return new Promise( (resolve, reject) => {
            try {

                this._application = restify.createServer({
                    name: 'api-restaurant-base-api',
                    version: '1.0.0'
                });

                this.application.use(restify.plugins.queryParser());

                this._application.listen(3000, () => {
                    resolve(this._application);
                });

                for (let router of routers) {
                    router.applyRoutes(this._application);
                }

            } catch (error) {
                reject(error);
            }
        });
    }


    public async boostrap(routers: Router[] = []): Promise<Server> {
        return await this.initRoutes(routers);
    }


}