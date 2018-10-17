import {Router} from './router';
import * as restify from 'restify';

export class Resource implements Router {
    public entity: string;

    public applyRoutes(application: restify.Server) {

        application.get(`/${this.entity}`, (req, resp, next) => {
            resp.json({message: `${this.entity} router get`});

        });

        application.post(`/${this.entity}`, (req, resp, next) => {
            resp.json({message: `${this.entity} router post`});

        });


    }

}