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

        this.Total={
            totalAmount: 0,
            totalPrice:  0
        };
    }//constructor

    getCart(){
        return this.cart;
    }//getCart

    addProduct( product ){

        console.log("addProduct" , product);

        this.cart.push( this._getSimpleProduct(product) );

        this.localStorageService.set( 'cartProduct' , this.cart );

    }//addProduct

    changeStorageService(cart){

        let cartNew=[];

        for(let i=0; i<cart.length; i++){
            cartNew.push(this._getSimpleProduct(cart[i]));
        }//for
        this.localStorageService.set( 'cartProduct' , cartNew );

    }//changeStorageService

    _getSimpleProduct(product){
        return {

            "productID" :    product.productID,
            "amount" :       product.amount,

        };
    }


    total( products ){


        return products.reduce(  (prevValue , currentItem )=>{

            return prevValue + ( +currentItem.amount * +currentItem.productPrice);

        } , 0 );


    }//total


    async getProductsInCart(){

        let ids = [].map.call( this.cart , c => c.productID );

        let response = await this.http.post(`${this.PASS.HOST}${this.PASS.GET_PRODUCTS_BY_IDS}`, {
            ids: ids
        });

        return response.data.data;

    }

    async  GetPromo (){
        let response = await this.http.get(`${this.PASS.HOST}${this.PASS.GET_PROMO}`);
        return response.data;

    };

}