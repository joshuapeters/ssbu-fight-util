import express = require("express");
import Controller from "../Controller";
import * as readConductor from "../../../../../01_core/conductors/characters/CharacterReadConductor";

export default class CharactersController extends Controller {

    constructor () {
        super();

        this.path = '/characters'
        this.initRoutes();
    }

    private initRoutes() {
        this.router.get(this.path + "/:id", this.get);
        this.router.get(this.path, this.index);
    }

    get = (request: express.Request, response: express.Response) => {
        var characterId = request.params.id;
        var character = readConductor.findById(characterId);
        
        response.send(character);
    }

    index = (request: express.Request, response: express.Response) => {
        var characters = readConductor.findAll();

        response.send(characters);
    }
}
