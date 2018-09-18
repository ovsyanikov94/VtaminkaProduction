"use strict";

export  default class NewsService{

    constructor($http ,
                PASS ,){

        this._$http = $http;
        this._PASS = PASS;

    }//constructor

    async getNews(limit, offset){

        let response = await this._$http.get(`${this._PASS.HOST}${this._PASS.GET_NEWS}?limit=${limit || 4}&offset=${offset || 0}` )


        return response.data.data;
    }//getNews

    async getOneNews(id){

        let respone = await this._$http.get(`${this._PASS.HOST}${this._PASS.GET_ONE_NEWS}/${id}`);
        return respone.data.data;

    }
}