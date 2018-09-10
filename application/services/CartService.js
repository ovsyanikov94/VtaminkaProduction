"use strict";


export default class CartService{


    constructor(localStorageService, $http, PASS){

        if(localStorageService.get('cartProduct')){
            this.cart = localStorageService.get('cartProduct');
        }//if
        else{
            this.cart = [];
        }//else

        this.localStorageService=localStorageService;
        this.http = $http;
        this.PASS= PASS;
    }//constructor

    getCart(){
        return this.cart;
    }//getCart

    addProduct( product ){

        this.cart.push( product );

        this.localStorageService.set( 'cartProduct' , this.cart );

    }//addProduct

    changeStorageService(cart){

        let cartNew=[];
        for(let i=0; i<cart.length; i++){
            cartNew.push(this._getSimpleProduct(cart[i]));
        }
        this.localStorageService.set( 'cartProduct' , cartNew );
    }//changeStorageService

    _getSimpleProduct(product){
        return {

            "ProductID" :    product.ProductID,
            "ProductTitle" : product.ProductTitle,
            "ProductPrice" : product.ProductPrice,
            "ProductImage" : product.ProductImage,
            "amount" :       product.amount,
            "isInCart"     :  product.isInCart,

        };
    }


    total(){

        let Total={
            totalAmount: 0,
            totalPrice:  0
        };


        for(let i=0; i<this.cart.length; i++){

            Total.totalAmount+=+this.cart[i].amount;

            Total.totalPrice+=this.cart[i].amount*this.cart[i].ProductPrice;

        }
        return Total;
    }


    async  GetPromo (){
        let response = await this.http.get(`${this.PASS.HOST}${this.PASS.GET_PROMO}`);
        return response.data;

    };

}