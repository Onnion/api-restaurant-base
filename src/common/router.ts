import * as restify from 'restify';

export abstract class Router {
    abstract entity: string;
    abstract application: restify.Server;

    abstract applyRoutes(application: restify.Server): any;
}