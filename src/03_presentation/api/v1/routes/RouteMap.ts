import express from 'express';

/**
 * maps our controllers and their routes to the global routing service in express
 */
export class RouteMap {

    private apiPrefixs = {
        V1: '/api/v1'
    };

    public mount(app: express.Application, controllers) {
        controllers.forEach((controller) => {
            app.use(this.apiPrefixs.V1, controller.router);
        })
    }
}