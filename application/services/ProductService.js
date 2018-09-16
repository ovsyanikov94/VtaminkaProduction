"use strict";

export default class ProductService{

    constructor(
        $http ,
       PASS
    ){

        this._$http = $http;
        this._PASS = PASS;

    }

    async getProducts(){

        let response = await this._$http.get( `${this._PASS.HOST}${this._PASS.GET_PRODUCTS}?limit=2&offset=0` );

        let products = response.data.data;

        products.forEach( p => {
            p.amount = 1;
        } );

        return products;

    }//getProducts

    async getSingleProduct(productID){

        let id = this._PASS.GET_PRODUCT.replace('{{ProductID}}' , productID);

        let response = await this._$http.get(`${this._PASS.HOST}${id}`);

        return response.data;

    }//getSingleProduct

}