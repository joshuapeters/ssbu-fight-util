import express from 'express';
import { RouteMap } from './api/v1/routes/RouteMap';
import CharactersController from './api/v1/controllers/characters/CharactersController';

export default class App {
    private app: express.Application;

    constructor() {
        this.app = express()
    }

    public initialize(): App {
        this._initializeRoutes();
        this._initializeMiddleware();

        return this;
    }

    public start(port: number): void {
        this.app.listen(port, (err) => {
            if (err) {
                return console.log(err)
            }

            return console.log(`server is listening on ${port}`)
        })
    }


    // Mount controllers here
    private _initializeRoutes() {
        var routeMap = new RouteMap();

        routeMap.mount(
            this.app,
            [
                new CharactersController()
            ]
        )
    }

    private _initializeMiddleware() {

    }
}