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
        let resProduct = [];
      
        products.forEach( p => {
            let product = {
                "ProductID": p.productID,
                "ProductTitle": p.productTitle,
                "ProductPrice": p.productPrice,
                "ProductImage": `${this._PASS.HOST}${p.image.imagePath}`,
                "amount": 1
            }
            resProduct.push(product);
        } );

        return resProduct;

    }//getProducts

    async getSingleProduct(productID){

        let id = this._PASS.GET_PRODUCT.replace('{{ProductID}}' , productID);

        let response = await this._$http.get(`${this._PASS.HOST}${id}`);

        return response.data;

    }//getSingleProduct

}