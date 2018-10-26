import {Router} from './router';
import * as restify from 'restify';

export class Resource implements Router {
    public entity: string;
    public application: restify.Server;

    protected get( ) {
        this.application.get(`/${this.entity}`, (req, resp, next) => {
            resp.json({message: `${this.entity} router get`});

        });
    }


    protected post( ) {
        this.application.post(`/${this.entity}`, (req, resp, next) => {
            resp.json({message: `${this.entity} router post`});
    
        });
    
    }

   
    public applyRoutes( ) {

    
    }

}