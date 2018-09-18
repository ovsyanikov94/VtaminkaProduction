"use strict";

export default class ProductService{

    constructor(
        $http ,
       PASS
    ){

        this._$http = $http;
        this._PASS = PASS;

    }

    async getProducts( limit , offset ){

        let response = await this._$http.get( `${this._PASS.HOST}${this._PASS.GET_PRODUCTS}?limit=${limit || 2}&offset=${offset || 0}` );

        let products = response.data.data;

        products.forEach( p => {

            p.amount = 1;

        } );

        return products;

    }//getProducts

    async getCategoryProducts(categoryID,limit,offset){

        let id = this._PASS.GET_CATEGORY_PRODCUTS.replace('{{CategoryID}}' , categoryID);

        let response = await this._$http.get(`${this._PASS.HOST}${id}?limit=${limit || 2}&offset=${ offset || 0}`);

        return response.data.data;

    }//getCategoryProducts

    async getSingleProduct(productID){

        let id = this._PASS.GET_PRODUCT.replace('{{id}}' , productID);

        let response = await this._$http.get(`${this._PASS.HOST}${id}`);

        return response.data.data;

    }//getSingleProduct

}