import express from 'express';

export default class Controller {
    public path     : string;
    public router   : express.Router;

    constructor() {
        this.router = express.Router();
    }
}