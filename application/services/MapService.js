"use strict";


export default class MapService{

    constructor(
        $http ,
        PASS ,

    ){

        this._$http = $http;
        this._PASS = PASS;

    }//constructor

    async getCoords(){

            let response = await this._$http.get( `${this._PASS.HOST}${this._PASS.GET_COORD}` ) ;

            return response.data.data;

    }//getCoords

}