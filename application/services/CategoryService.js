"use strict";


export default class ApiService{

    constructor(
        $http ,
        PASS ,

    ){

        this._$http = $http;
        this._PASS = PASS;

    }

    async getCategories(){

        let response = await this._$http.get( `${this._PASS.HOST}${this._PASS.GET_CATEGORIES}`);

        let categories = response.data.data;

        return categories;

    }//getCategories

}//CategoryService