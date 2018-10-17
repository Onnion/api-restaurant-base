import * as restify from 'restify';

export abstract class Router {
    abstract entity: string;

    abstract applyRoutes(application: restify.Server): any;
}