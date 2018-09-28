"use strict";

//====================CONTROLLERS===========================//
import MainController from './controllers/MainController';

//====================SERVICES==============================//
import LocaleService from './services/LocaleService';
import ProductService from './services/ProductService';
import CartService from './services/CartService';
import NewsService from './services/NewsService';
import ApiService from './services/ApiService';
import CategoryService from './services/CategoryService';
import MapService from './services/MapService';

//====================FILTERS==============================//

import DescriptionFilter from './filters/DescriptionFilter';
//====================DIRECTIVES==============================//
import LangsOptionDirective from './directives/LangsOptionDirective';
import ProductDirective from './directives/ProductDirective';
import SingleProductDirective from './directives/SingleProductDirective';
import CartDirective from './directives/CartDirective';
import BlogDirective from './directives/BlogDirective';



angular.module('VtaminkaApplication.controllers' , []);
angular.module('VtaminkaApplication.services' , []);
angular.module('VtaminkaApplication.filters' , []);
angular.module('VtaminkaApplication.directives' , []);
angular.module('VtaminkaApplication.constants' , []);

//====================CONTROLLERS DECLARATIONS================================//
angular.module('VtaminkaApplication.controllers')
    .controller( 'MainController' , [ '$scope' , 'LocaleService' , '$translate' , 'localStorageService' , 'CategoryService' , '$mdDialog' , MainController ]);

//====================CONSTANTS================================//

angular.module('VtaminkaApplication.constants')
    .constant('PASS' , {
        HOST: 'http://185.98.87.71/admin/',
        GET_NEWS : 'api/news/news-list',
        GET_ONE_NEWS : 'api/news/one-news',
        GET_LANGS: 'api/locale/list',
        GET_PRODUCTS :'api/products/list',
        GET_CATEGORY_PRODCUTS:'api/category/plist/{{CategoryID}}',
        GET_TRANSLATIONS: 'i18n/{{LANG}}.json',
        GET_PRODUCT:"api/products/{{id}}",
        GET_PRODUCTS_BY_IDS:"api/get-products-for-cart",
        GET_PROMO:"api/promo-codes/use-promo-code",
        GET_CATEGORIES:"api/category/list",
        POST_FEEDBACK:"api/feedbacks/new",
        GET_COORD:"api/cord-settings",
        MAKE_ORDER :"api/order/new",

    });


//====================SERVICES DECLARATIONS===================//
angular.module('VtaminkaApplication.services')
    .service('LocaleService' , [ '$http', 'PASS', LocaleService ]);

angular.module('VtaminkaApplication.services')
    .service('ProductService' , [ '$http', 'PASS', ProductService ]);

angular.module('VtaminkaApplication.services')
    .service( 'CartService' , [ 'localStorageService','$http','PASS', CartService ]);

angular.module('VtaminkaApplication.services')
    .service('NewsService', ['$http', 'PASS', NewsService ]);

angular.module('VtaminkaApplication.services')
    .service('ApiService', ['$http', 'PASS', ApiService ]);

angular.module('VtaminkaApplication.services')
    .service('MapService', ['$http', 'PASS', MapService ]);

angular.module('VtaminkaApplication.services')
    .service('CategoryService', ['$http', 'PASS', CategoryService ]);

//====================DIRECTIVES DECLARATIONS===================//
angular.module('VtaminkaApplication.directives')
    .directive('langsOptionDirective' , [ LangsOptionDirective ]);

angular.module('VtaminkaApplication.directives')
    .directive('productDirective' , [ ProductDirective ]);

angular.module('VtaminkaApplication.directives')
    .directive('singleProductDirective' , [ SingleProductDirective ]);

angular.module('VtaminkaApplication.directives')
    .directive('cartDirective' , [ CartDirective ]);

angular.module('VtaminkaApplication.directives')
    .directive('blogDirective' , [ BlogDirective ]);



//====================FILTERS DECLARATIONS===================//
angular.module('VtaminkaApplication.filters')
    .filter('DescriptionFilter', [DescriptionFilter]);



let app = angular.module('VtaminkaApplication',[
    'leaflet-directive',
    'angular-loading-bar',
    'LocalStorageModule',
    'VtaminkaApplication.controllers',
    'VtaminkaApplication.filters',
    'VtaminkaApplication.services',
    'VtaminkaApplication.directives',
    'VtaminkaApplication.constants',
    'ngRoute',
    'ui.router',
    'pascalprecht.translate',
    'ngMaterial',
    'ngMessages',
]);

app.config( [
    '$stateProvider',
    '$urlRouterProvider',
    '$locationProvider',
    'localStorageServiceProvider' ,
    'cfpLoadingBarProvider',
    '$translateProvider',
    ($stateProvider , $urlRouterProvider , $locationProvider , localStorageServiceProvider , cfpLoadingBarProvider , $translateProvider)=>{

    $locationProvider.html5Mode(true);//.hashPrefix('!')

    $urlRouterProvider.otherwise('/home');

    $translateProvider.useStaticFilesLoader({
        'prefix': '/admin/i18n/',
        'suffix': '.json'
    });

    $translateProvider.preferredLanguage('RU');

       // $translateProvider.useLocalStorage();

    cfpLoadingBarProvider.includeSpinner = true;
    cfpLoadingBarProvider.includeBar = true;

    localStorageServiceProvider.setStorageCookie( 7 , '/' );
    localStorageServiceProvider.setStorageCookieDomain('localhost');

    $stateProvider.state('home' , {
        'url': '/home',
        'views':{
            "header":{
                "templateUrl": "templates/header.html",
                controller: [ '$scope' , 'CartService' , 'langs' , function ($scope, CartService , langs ){
                    $scope.langs = langs;
                    $scope.cart = CartService.getCart();
                } ]
            },
            "content": {
                'templateUrl': "templates/home/home.html",
                controller: [
                    '$scope' ,
                    'CartService' ,
                    'ProductService',
                    'ApiService',
                    'products',
                    'news' ,
                    function (
                            $scope ,
                            CartService ,
                            ProductService,
                            ApiService,
                            products,
                            news
                    ){

                        $scope.regName=true;
                        $scope.regMail=true;
                        $scope.regPhone=true;
                        $scope.regMessage=true;

                    ripplyScott.init('.button', 0.75);

                    $scope.limit = 2;
                    $scope.offset = 0;

                    $scope.cart = CartService.getCart();

                    products.forEach( p => {

                        let product = $scope.cart.find( pr => pr.productID === p.productID  );

                        if( product ){

                            p.isInCart = true;
                            p.amount = product.amount;

                        }//if
                        else{
                            p.isInCart = false;
                        }//else

                    });

                    $scope.products = products;
                    $scope.news = news;

                    $scope.MoreProduct = async function  (){

                        $scope.offset += $scope.limit;

                        let moreProducts = await ProductService.getProducts( $scope.limit , $scope.offset );

                        moreProducts.forEach( p => {

                            $scope.products.push(p);

                            let checkProduct = $scope.cart.find( pr => pr.productID === p.productID );

                            if(checkProduct){

                                p.amount = checkProduct.amount;
                                p.isInCart = true;

                            }//if

                        } );

                        if( moreProducts.length === 0 ){
                          $scope.offset += $scope.products.length;
                        }//

                        console.log($scope.offset);

                    }//MoreProduct

                    $scope.RegName = function  (){

                        let regEng = /^[a-z0-9а-я\s_\-:,.;"'?!() ]{2,75}$/i;



                        if(regEng.test($scope.name) && $scope.name) {
                            $scope.regName=true;
                        }//if
                        else {
                            $scope.regName=false;
                        }

                    }//RegName

                    $scope.RegEmail=function  (){

                        let regEmail = /^[a-z0-9а-я\s_\-:,.;"'?!()]{2,25}@[a-z0-9а-я\s_\-:]{2,20}.[a-zа-я]{2,10}$/i;

                        if(regEmail.test($scope.email)) {
                            $scope.regMail=true;
                        }//if
                        else {
                            $scope.regMail=false;
                        }

                    }//RegEmail

                    $scope.RegPhone = function  (){

                        let regPhone = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,12}(\s*)?$/;

                        if(regPhone.test($scope.phone)) {
                            $scope.regPhone=true;
                        }//if
                        else {
                            $scope.regPhone=false;
                        }

                    }//RegPhone

                    $scope.RegMessage = function  (){

                        let regMess = /^[a-z0-9а-я\s_\-:,.;"'?!()]{2,1500}$/i;

                        if(regMess.test($scope.message)) {
                            $scope.regMessage=true;
                        }//if
                        else {
                            $scope.regMessage=false;
                        }

                    }//RegPhone

                    $scope.SendMessage =  function  ( $event ){

                        if($scope.name && $scope.regName
                        && $scope.email && $scope.regMail
                        && $scope.phone && $scope.regPhone
                        && $scope.message && $scope.regMessage
                        ){
                            ApiService.sendMessage($scope.name, $scope.email, $scope.phone, $scope.message)
                                .then(response=>{

                                    $scope.showDialog($event , response.message);

                                    console.log('response - ', response);
                                })
                                .catch(error=>{
                                    console.log(error);
                                });

                        }//if

                    }//SendMessage

                } ]
            },
            "footer": {
                'templateUrl': "templates/footer.html",
            }
        },
        'resolve': {

            'products': [ 'ProductService' , function ( ProductService ){
                return ProductService.getProducts();
            } ],
            'langs': [ 'LocaleService' , function ( LocaleService ){
                return LocaleService.getLangs();
            }  ],
            'news': [ 'NewsService', function  ( NewsService ){
                return NewsService.getNews();
            }]

        }
    });

    $stateProvider.state('categoryProducts',{

        'url':'/category/:categoryID',
        "views":{
            "header":{
                "templateUrl": "templates/header.html",
                controller: [ '$scope' , 'CartService' , 'langs' , function ($scope, CartService , langs ){
                    $scope.langs = langs;
                    $scope.cart = CartService.getCart();
                } ]
            },
            "content":{
                'templateUrl': "templates/categoryProducts/categoryProducts.html",
                controller:['$scope', '$stateParams' ,'ProductService','categoryProducts' ,function ($scope,$stateParams,ProductService,categoryProducts) {
                    $scope.categoryProducts = categoryProducts;

                    $scope.categoryID = $scope.categoryProducts

                    $scope.offset = 0;
                    $scope.limit = 2;

                    $scope.GetMoreProductsByCategory = async function (){

                        $scope.offset += $scope.limit;

                        let response = await ProductService.getCategoryProducts($stateParams.categoryID,$scope.limit , $scope.offset);

                        response.products.forEach(  p => {
                            $scope.categoryProducts.products.push(p);
                            p.amount = 1;
                        });

                    };

                }]
            },
            "footer": {
                'templateUrl': "templates/footer.html",
            },
        },
        'resolve': {

            'langs': [ 'LocaleService' , function ( LocaleService ){
                return LocaleService.getLangs();
            }  ],

            'categoryProducts':['ProductService','$stateParams', function  ( ProductService, $stateParams){
                return ProductService.getCategoryProducts($stateParams.categoryID);
            }]

        }

    });

    $stateProvider.state('singleProduct' , {
            'url': '/product/:productID',
            'views':{
                "header":{
                    "templateUrl": "templates/header.html",
                    controller: [ '$scope' , 'CartService' , 'langs' , function ($scope, CartService , langs ){
                        $scope.langs = langs;
                        $scope.cart = CartService.getCart();
                    } ]
                },
                "content": {
                    'templateUrl': "templates/singleProduct/singleProduct.html",
                    controller:['$scope','product','$stateParams', 'CartService' , function ($scope, product, $stateParams ,CartService ) {

                        let productInCart = CartService.getCart().find( p => p.productID === product.productID );

                        $scope.product = product;

                        console.log(CartService.getCart());

                        if(productInCart){
                           $scope.product.amount = productInCart.amount;
                           $scope.product.isInCart = true;
                        }//if
                        else{
                            $scope.product.amount = 1;
                            $scope.product.isInCart = false;
                        }//else


                        let attributes = $scope.product.attributes.map( a => {
                            return {
                                attributeTitle: a.attributeTitle,
                                attributeDetails: a.pAttributes
                            }
                        } );

                        $scope.attributes = attributes;
                        console.log($scope.attributes);

                    }]
                },
                "footer": {
                    'templateUrl': "templates/footer.html",
                }

            },
            'resolve': {
                'langs': [ 'LocaleService' , function ( LocaleService ){
                return LocaleService.getLangs();
                }  ],

                'product':['ProductService','$stateParams', function  ( ProductService, $stateParams){
                    return ProductService.getSingleProduct($stateParams.productID);
                }
                ],
                'categories':['CategoryService',function (CategoryService) {
                    return CategoryService.getCategories();
                }]

        }
        });

    $stateProvider.state('cart' , {
            'url': '/cart',
            'views':{
                "header":{
                    "templateUrl": "templates/header.html",
                    controller: [ '$scope' , 'CartService','langs' , function ($scope, CartService , langs ){
                        $scope.langs = langs;
                        $scope.cart = CartService.getCart();
                    } ]
                },
                "content": {
                    'templateUrl': "templates/cart/cart.html",
                    controller: [ '$scope' ,  'CartService' , 'products' , function ($scope , CartService , products){

                        $scope.cart = CartService.getCart();
                        $scope.products = products;

                        $scope.products.forEach( p =>{

                            let product = $scope.cart.find( pr => pr.productID === p.productID );

                            p.amount = product.amount || 1;

                        } );

                        $scope.Total = CartService.total( $scope.products);

                        $scope.$watch( 'cart.length' , function (){
                                $scope.Total = CartService.total( $scope.products);
                                //$scope.$apply();
                        } );
                    } ]
                },
                "footer": {
                    'templateUrl': "templates/footer.html",
                }
            },
            'resolve': {

                'langs': [ 'LocaleService' , function ( LocaleService ){
                    return LocaleService.getLangs();
                }  ],
                'products': [
                    'CartService' , function ( CartService ){
                        return CartService.getProductsInCart();
                    }
                ]

            }
        });

    $stateProvider.state('checkout' , {
            'url': '/checkout',
            'views':{
                "header":{
                    "templateUrl": "templates/header.html",
                    controller: [ '$scope' , 'CartService' , 'langs' , function ($scope, CartService , langs ){
                        $scope.langs = langs;
                        $scope.cart = CartService.getCart();

                    } ]
                },
                "content": {
                    'templateUrl': "templates/checkout/checkout.html",
                    controller: [ '$scope' , 'PASS','$http', 'CartService' , 'products',  function ($scope , PASS, $http, CartService , products){

                        $scope.cart = products;
                        let cart = CartService.getCart();

                        [].forEach.call( cart , item => {

                            let product = $scope.cart.find( p => p.productID === item.productID );
                            product.amount = item.amount || 1;

                        } );

                        $scope.discount = 0;

                        $scope.Total = CartService.total( $scope.cart );

                        $scope.order = {

                            user: {
                                'userName': '',
                                'userEmail': '',
                                'userPhone': '',
                                'userAdress': '',
                                'userMessage': '',
                                'numberCard': '',
                                'yearCard': '',
                                'monthCard': '',
                                'cvvCard': '',
                                'nameCard': '',
                            },
                            promoCode: '',
                            products: $scope.cart
                        };

                        $scope.years = [
                            1990,
                            1991,
                            1992,
                            1993,
                            1994,
                            1995,
                        ];

                        $scope.monthes = [
                            1,
                            2,
                            3,
                            4,
                            5,
                            6,
                            7,
                            8,
                            9,
                            10,
                            11,
                            12
                        ];

                        $scope.promoOk = false;

                        $scope.regName = true;
                        $scope.regMail = true;
                        $scope.regPhone = true;

                        ripplyScott.init('.button', 0.75);

                        $scope.PromoClick = async function  (){


                            let response = await CartService.GetPromo( $scope.order.promoCode );

                            console.log(response);

                            if( response.code === 200){

                                $scope.discount = response.data;
                                $scope.promoOk = true;

                            }//if

                        }//PromoClick

                        $scope.ConfirmOrder = async function ($event){

                            let response = await CartService.MakeOrder( $scope.order );

                            if( response.code === 200 ){
                                $scope.showDialog($event , `Ваш заказ принят в обработку! Номер заказа: ${response.data.orderID}`);
                            }//if
                            else{
                                $scope.showDialog($event , 'Произошла неизвестная ошибка! Попробуйте позже!');
                            }//else

                            console.log('response' , response);

                        };

                        $scope.RegName = function  (){

                            let regEng = /^[A-Z]{1}[a-z]{3,10}$/;

                            let regLat = /^[А-Я]{1}[а-я]{3,10}$/;

                            if(regEng.test($scope.order.user.userName) || regLat.test($scope.order.user.userName)) {
                                $scope.regName=true;
                            }//if
                            else {
                                $scope.regName=false;
                            }

                        }//RegName
                        
                        $scope.RegEmail=function  (){

                            let regEmail = /^[a-z0-9\.\_\-]+@[a-z0-9]{2,6}(\.[a-z0-9]+)?\.[a-z]{2,5}$/ig;

                            if(regEmail.test($scope.order.user.userEmail)) {
                                $scope.regMail=true;
                            }//if
                            else {
                                $scope.regMail=false;
                            }

                        }//RegEmail

                        $scope.RegPhone = function  (){

                            let regPhone = /^\+38\(0[0-9]{2}\)\-[0-9]{3}(\-[0-9]{2}){2}$/i;

                            if(regPhone.test($scope.order.user.userPhone)) {
                                $scope.regPhone=true;
                            }//if
                            else {
                                $scope.regPhone=false;
                            }

                        }//RegPhone


                    } ]
                },
                "footer": {
                    'templateUrl': "templates/footer.html",
                }
            },
            'resolve': {

                'langs': [ 'LocaleService' , function ( LocaleService ){
                    return LocaleService.getLangs();
                }  ],
                'products': [
                    'CartService' , function ( CartService ){
                        return CartService.getProductsInCart();
                    }
                ]



            }
        });

    $stateProvider.state('contacts' , {
        'url': '/contacts',
        'views':{
            "header":{
                "templateUrl": "templates/header.html",
                controller: [ '$scope' , 'CartService', 'langs'  ,   function ($scope, CartService , langs ){
                    $scope.langs = langs;
                    $scope.cart = CartService.getCart();
                } ]
            },
            "content": {
                'templateUrl': "templates/contacts.html",
                controller: [ '$scope' , 'ApiService' , 'coord' ,  function ($scope , ApiService , coord ){

                    $scope.regName=true;
                    $scope.regMail=true;
                    $scope.regPhone=true;
                    $scope.regMessage=true;

                    $scope.MoreProduct = async function  (){

                        if(products.length > $scope.offset){
                            $scope.offset += 2;
                        }//

                        let moreProducts = await ProductService.getProducts( $scope.limit , $scope.offset );

                        moreProducts.forEach( p => {
                            p.amount = 1;
                            $scope.products.push(p);
                        } );

                    }//MoreProduct

                    $scope.RegName = function  (){

                        let regEng = /^[a-z0-9а-я\s_\-:,.;"'?!() ]{2,75}$/i;



                        if(regEng.test($scope.name) && $scope.name) {
                            $scope.regName=true;
                        }//if
                        else {
                            $scope.regName=false;
                        }

                    }//RegName

                    $scope.RegEmail=function  (){

                        let regEmail = /^[a-z0-9а-я\s_\-:,.;"'?!()]{2,25}@[a-z0-9а-я\s_\-:]{2,20}.[a-zа-я]{2,10}$/i;

                        if(regEmail.test($scope.email)) {
                            $scope.regMail=true;
                        }//if
                        else {
                            $scope.regMail=false;
                        }

                    }//RegEmail

                    $scope.RegPhone = function  (){

                        let regPhone = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,12}(\s*)?$/;

                        if(regPhone.test($scope.phone)) {
                            $scope.regPhone=true;
                        }//if
                        else {
                            $scope.regPhone=false;
                        }

                    }//RegPhone

                    $scope.RegMessage = function  (){

                        let regMess = /^[a-z0-9а-я\s_\-:,.;"'?!()]{2,1500}$/i;

                        if(regMess.test($scope.message)) {
                            $scope.regMessage=true;
                        }//if
                        else {
                            $scope.regMessage=false;
                        }

                    }//RegPhone

                    $scope.SendMessage =  function  ( $event ){

                        if($scope.name && $scope.regName
                            && $scope.email && $scope.regMail
                            && $scope.phone && $scope.regPhone
                            && $scope.message && $scope.regMessage
                        ){
                            ApiService.sendMessage($scope.name, $scope.email, $scope.phone, $scope.message)
                                .then(response=>{

                                    $scope.showDialog($event , response.message);

                                    console.log('response - ', response);
                                })
                                .catch(error=>{
                                    console.log(error);
                                });

                        }//if

                    }//SendMessage

                    angular.extend($scope, {
                        center: {
                            lat: coord.lat,
                            lng: coord.lng,
                            zoom: 18
                        },
                        myDefaults: {
                            scrollWheelZoom: true
                        },
                        markers: {
                            amarker:{
                                lat: coord.lat,
                                lng: coord.lng,
                                zoom: 18
                            }
                        }
                    });

                } ]
            },
            "footer": {
                'templateUrl': "templates/footer.html",
            }
        },
        'resolve': {

            'langs': [ 'LocaleService' , function ( LocaleService ){
                return LocaleService.getLangs();
            }  ],
            'coord': [ 'MapService' , function ( MapService ){
                return MapService.getCoords();
            }]
        }
    });

    $stateProvider.state('blog' , {
            'url': '/blog',
            'views':{
                "header":{
                    "templateUrl": "templates/header.html",
                    controller: [ '$scope' , 'CartService' , 'langs' , function ($scope, CartService , langs ){
                        $scope.langs = langs;
                        $scope.cart = CartService.getCart();

                    } ]
                },
                "content": {
                    'templateUrl': "templates/blog/blog.html",
                    controller: [
                        '$scope' ,
                        'NewsService',
                        'news' ,
                        function (
                            $scope ,
                            NewsService,
                            news
                        ){
                            ripplyScott.init('.button', 0.75);
                            $scope.limit =0;
                            $scope.offset = 2;

                            $scope.news = news;

                            $scope.MoreNews = async function  (){
                                if(news.length > $scope.offset){
                                    $scope.offset += 2;
                                }//

                                let moreNews = await NewsService.getNews( $scope.limit , $scope.offset );

                                moreNews.forEach( n => {

                                    $scope.news.push(n);
                                } );
                            }


                        } ]
                },
                "footer": {
                    'templateUrl': "templates/footer.html",
                }
            },
            'resolve': {

                'langs': [ 'LocaleService' , function ( LocaleService ){
                    return LocaleService.getLangs();
                }  ],
                'news': [ 'NewsService', function  ( NewsService ){
                    return NewsService.getNews(2,0)
                }]

            }
        });
      
    $stateProvider.state('single-blog',{

            'url':"/single-blog/:NewsId",
            'views':{
                "header":{
                    "templateUrl": "templates/header.html",
                    controller: [ '$scope' ,'CartService', 'langs' , function ($scope, CartService , langs ){

                        $scope.langs = langs;
                        $scope.cart = CartService.getCart();
                    } ]
                },
                "content":{
                    'templateUrl': "templates/news/newsTemplate.html",
                    controller:['$scope' ,'news',function ($scope,news) {
                        $scope.news = news;
                    }]

                },
                "footer": {
                    'templateUrl': "templates/footer.html",
                }

            },
            'resolve': {

                'news':['NewsService','$stateParams', function  ( NewsService,$stateParams ){
                    return NewsService.getOneNews($stateParams.NewsId)
                }  ],
                'langs': [ 'LocaleService' , function ( LocaleService ){
                    return LocaleService.getLangs();
                }  ],


            }
    });

} ] );

app.run(
    [          '$rootScope', '$state', '$stateParams', 'localStorageService', '$translate',
        function ($rootScope,   $state,   $stateParams, localStorageService , $translate) {

            let userLang = localStorageService.get('lang');

            if(userLang){
                $translate.use(userLang);
            }//if

        }
    ]);

