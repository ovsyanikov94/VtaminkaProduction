"use strict";

//====================CONTROLLERS===========================//
import MainController from './controllers/MainController';

//====================SERVICES==============================//
import LocaleService from './services/LocaleService';
import ProductService from './services/ProductService';
import CartService from './services/CartService';
import NewsService from './services/NewsService';
import ApiService from './services/ApiService';

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
    .controller( 'MainController' , [ '$scope' , 'LocaleService' , '$translate' , 'localStorageService' , '$mdDialog' , MainController ]);

//====================CONSTANTS================================//

angular.module('VtaminkaApplication.constants')
    .constant('PASS' , {
        HOST: 'http://localhost:5012/admin/',
        GET_NEWS : 'api/news/news-list',
        GET_ONE_NEWS : 'api/news/one-news',
        GET_LANGS: 'api/locale/list',
        GET_PRODUCTS :'api/products/list',
        GET_TRANSLATIONS: 'i18n/{{LANG}}.json',
        GET_PRODUCT:"products/Vitamin{{ProductID}}.json",
        GET_PROMO:"products/promo.json",
        POST_FEEDBACK:"api/feedbacks/new"

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
    'ngMap'
]);

app.config( [
    '$stateProvider',
    '$urlRouterProvider',
    '$locationProvider',
    'localStorageServiceProvider' ,
    'cfpLoadingBarProvider',
    '$translateProvider',
    ($stateProvider , $urlRouterProvider , $locationProvider , localStorageServiceProvider , cfpLoadingBarProvider , $translateProvider)=>{

    $locationProvider.html5Mode(true).hashPrefix('!')

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

                    $scope.limit =0;
                    $scope.offset = 2;

                    $scope.cart = CartService.getCart();

                    products.forEach(p=>{

                        for(let i=0; i<$scope.cart.length; i++){
                            if(p.ProductID === $scope.cart[i].ProductID){
                                p.isInCart=true;
                                p.amount=$scope.cart[i].amount;
                            }
                        }
                    });

                    $scope.products = products;

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

                    $scope.news = news;
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
                return NewsService.getNews()
            }]

        }
    });

    $stateProvider.state('singleProduct' , {
            'url': '/product/:productID/:productAmount',
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
                    controller:['$scope','product','$stateParams', function ($scope, product, $stateParams) {
                        $scope.product = product;
                        $scope.product.amount = $stateParams.productAmount;
                        var tabs = [
                            { title: 'One', content: "Tabs will become paginated if there isn't enough room for them."},
                            { title: 'Two', content: "You can swipe left and right on a mobile device to change tabs."},
                            { title: 'Three', content: "You can bind the selected tab via the selected attribute on the md-tabs element."},
                            { title: 'Four', content: "If you set the selected tab binding to -1, it will leave no tab selected."},
                            { title: 'Five', content: "If you remove a tab, it will try to select a new one."},
                            { title: 'Six', content: "There's an ink bar that follows the selected tab, you can turn it off if you want."},
                            { title: 'Seven', content: "If you set ng-disabled on a tab, it becomes unselectable. If the currently selected tab becomes disabled, it will try to select the next tab."},
                            { title: 'Eight', content: "If you look at the source, you're using tabs to look at a demo for tabs. Recursion!"},
                            { title: 'Nine', content: "If you set md-theme=\"green\" on the md-tabs element, you'll get green tabs."},
                            { title: 'Ten', content: "If you're still reading this, you should just go check out the API docs for tabs!"},
                            { title: 'Eleven', content: "If you're still reading this, you should just go check out the API docs for tabs!"},
                            { title: 'Twelve', content: "If you're still reading this, you should just go check out the API docs for tabs!"},
                            { title: 'Thirteen', content: "If you're still reading this, you should just go check out the API docs for tabs!"},
                            { title: 'Fourteen', content: "If you're still reading this, you should just go check out the API docs for tabs!"},
                            { title: 'Fifteen', content: "If you're still reading this, you should just go check out the API docs for tabs!"},
                            { title: 'Sixteen', content: "If you're still reading this, you should just go check out the API docs for tabs!"},
                            { title: 'Seventeen', content: "If you're still reading this, you should just go check out the API docs for tabs!"},
                            { title: 'Eighteen', content: "If you're still reading this, you should just go check out the API docs for tabs!"},
                            { title: 'Nineteen', content: "If you're still reading this, you should just go check out the API docs for tabs!"},
                            { title: 'Twenty', content: "If you're still reading this, you should just go check out the API docs for tabs!"}
                        ];

                        $scope.tabs = tabs;

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
                ]

        }
        });

    $stateProvider.state('cart' , {
            'url': '/cart',
            'views':{
                "header":{
                    "templateUrl": "templates/header.html",
                    controller: [ '$scope' , 'CartService' , 'langs' , function ($scope, CartService , langs ){
                        $scope.langs = langs;
                        $scope.cart = CartService.getCart();
                    } ]
                },
                "content": {
                    'templateUrl': "templates/cart/cart.html",
                    controller: [ '$scope' ,  'CartService' ,  function ($scope , CartService ){

                        $scope.cart = CartService.getCart();

                        $scope.Total=CartService.total();

                        $scope.$watch( 'cart.length' , function (){

                                $scope.Total = CartService.total();
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
                    controller: [ '$scope' , 'PASS','$http', 'CartService' ,  function ($scope , PASS, $http, CartService ){

                        $scope.cart = CartService.getCart();

                        $scope.promoOk=false;

                        $scope.regName=true;
                        $scope.regMail=true;
                        $scope.regPhone=true;


                        ripplyScott.init('.button', 0.75);

                        $scope.PromoClick = function  (){

                            let promos=[];

                            CartService.GetPromo()
                                .then(response=>{
                                        promos=response;

                                    let index=-1;
                                    for(let i=0; i<promos.length; i++){
                                        if(promos[i]['code'] === $scope.promoCode) {
                                            index = i;
                                        }//if
                                    }//for


                                    if(index!=-1){
                                        $scope.promoOk=true;
                                        $scope.Promo=promos[index];

                                        $scope.Total = CartService.total();
                                    }
                                    else{
                                        $scope.promoOk=false;
                                    }

                                    })
                                .catch(error=>{
                                    console.log(error);
                                });



                            
                        }//PromoClick

                        $scope.RegName = function  (){

                            let regEng = /^[A-Z]{1}[a-z]{3,10}$/;

                            let regLat = /^[А-Я]{1}[а-я]{3,10}$/;

                            if(regEng.test($scope.name) || regLat.test($scope.name)) {
                                $scope.regName=true;
                            }//if
                            else {
                                $scope.regName=false;
                            }

                        }//RegName
                        
                        $scope.RegEmail=function  (){

                            let regEmail = /^[a-z0-9\.\_\-]+@[a-z0-9]{2,6}(\.[a-z0-9]+)?\.[a-z]{2,5}$/ig;

                            if(regEmail.test($scope.email)) {
                                $scope.regMail=true;
                            }//if
                            else {
                                $scope.regMail=false;
                            }

                        }//RegEmail

                        $scope.RegPhone = function  (){

                            let regPhone = /^\+38\(0[0-9]{2}\)\-[0-9]{3}(\-[0-9]{2}){2}$/i;

                            if(regPhone.test($scope.phone)) {
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


            }
        });

    $stateProvider.state('contacts' , {
        'url': '/contacts',
        'views':{
            "header":{
                "templateUrl": "templates/header.html",
                controller: [ '$scope' , 'CartService' , 'langs' , function ($scope, CartService , langs ){
                    $scope.langs = langs;
                    $scope.cart = CartService.getCart();
                } ]
            },
            "content": {
                'templateUrl': "templates/contacts.html",
                controller: [ '$scope' , 'NgMap' ,  function ($scope , NgMap ){

                    $scope.center = {
                        'lat': 48.019849,
                        'lng': 37.804198
                    };

                    NgMap.getMap().then(function(map) {
                        console.log('map' , map);

                        map.setCenter($scope.center);

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
      
$stateProvider.state('oneNews',{

        'url':"/oneNews/:NewsId",
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
                controler:['$scope' ,'news',function ($scope,news) {
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

