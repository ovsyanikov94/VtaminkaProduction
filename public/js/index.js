/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./application/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./application/app.js":
/*!****************************!*\
  !*** ./application/app.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controllers_MainController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controllers/MainController */ "./application/controllers/MainController.js");
/* harmony import */ var _services_LocaleService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/LocaleService */ "./application/services/LocaleService.js");
/* harmony import */ var _services_ProductService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/ProductService */ "./application/services/ProductService.js");
/* harmony import */ var _services_CartService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/CartService */ "./application/services/CartService.js");
/* harmony import */ var _services_NewsService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/NewsService */ "./application/services/NewsService.js");
/* harmony import */ var _services_ApiService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/ApiService */ "./application/services/ApiService.js");
/* harmony import */ var _filters_DescriptionFilter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./filters/DescriptionFilter */ "./application/filters/DescriptionFilter.js");
/* harmony import */ var _directives_LangsOptionDirective__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directives/LangsOptionDirective */ "./application/directives/LangsOptionDirective.js");
/* harmony import */ var _directives_ProductDirective__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./directives/ProductDirective */ "./application/directives/ProductDirective.js");
/* harmony import */ var _directives_SingleProductDirective__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./directives/SingleProductDirective */ "./application/directives/SingleProductDirective.js");
/* harmony import */ var _directives_CartDirective__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./directives/CartDirective */ "./application/directives/CartDirective.js");


//====================CONTROLLERS===========================//


//====================SERVICES==============================//






//====================FILTERS==============================//


//====================DIRECTIVES==============================//







angular.module('VtaminkaApplication.controllers' , []);
angular.module('VtaminkaApplication.services' , []);
angular.module('VtaminkaApplication.filters' , []);
angular.module('VtaminkaApplication.directives' , []);
angular.module('VtaminkaApplication.constants' , []);

//====================CONTROLLERS DECLARATIONS================================//
angular.module('VtaminkaApplication.controllers')
    .controller( 'MainController' , [ '$scope' , 'LocaleService' , '$translate' , 'localStorageService' , '$mdDialog' , _controllers_MainController__WEBPACK_IMPORTED_MODULE_0__["default"] ]);

//====================CONSTANTS================================//

angular.module('VtaminkaApplication.constants')
    .constant('PASS' , {
        HOST: 'http://localhost:5012/admin/',
        GET_NEWS : 'api/news/news-list',
        GET_LANGS: 'api/locale/list',
        GET_PRODUCTS :'api/products/list',
        GET_TRANSLATIONS: 'i18n/{{LANG}}.json',
        GET_PRODUCT:"products/Vitamin{{ProductID}}.json",
        GET_PROMO:"products/promo.json",
        POST_FEEDBACK:"api/feedbacks/new"

    });


//====================SERVICES DECLARATIONS===================//
angular.module('VtaminkaApplication.services')
    .service('LocaleService' , [ '$http', 'PASS', _services_LocaleService__WEBPACK_IMPORTED_MODULE_1__["default"] ]);

angular.module('VtaminkaApplication.services')
    .service('ProductService' , [ '$http', 'PASS', _services_ProductService__WEBPACK_IMPORTED_MODULE_2__["default"] ]);

angular.module('VtaminkaApplication.services')
    .service( 'CartService' , [ 'localStorageService','$http','PASS', _services_CartService__WEBPACK_IMPORTED_MODULE_3__["default"] ]);

angular.module('VtaminkaApplication.services')
    .service('NewsService', ['$http', 'PASS', _services_NewsService__WEBPACK_IMPORTED_MODULE_4__["default"] ]);

angular.module('VtaminkaApplication.services')
    .service('ApiService', ['$http', 'PASS', _services_ApiService__WEBPACK_IMPORTED_MODULE_5__["default"] ]);

//====================DIRECTIVES DECLARATIONS===================//
angular.module('VtaminkaApplication.directives')
    .directive('langsOptionDirective' , [ _directives_LangsOptionDirective__WEBPACK_IMPORTED_MODULE_7__["default"] ]);

angular.module('VtaminkaApplication.directives')
    .directive('productDirective' , [ _directives_ProductDirective__WEBPACK_IMPORTED_MODULE_8__["default"] ]);

angular.module('VtaminkaApplication.directives')
    .directive('singleProductDirective' , [ _directives_SingleProductDirective__WEBPACK_IMPORTED_MODULE_9__["default"] ]);

angular.module('VtaminkaApplication.directives')
    .directive('cartDirective' , [ _directives_CartDirective__WEBPACK_IMPORTED_MODULE_10__["default"] ]);



//====================FILTERS DECLARATIONS===================//
angular.module('VtaminkaApplication.filters')
    .filter('DescriptionFilter', [_filters_DescriptionFilter__WEBPACK_IMPORTED_MODULE_6__["default"]]);


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
    })

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



/***/ }),

/***/ "./application/controllers/MainController.js":
/*!***************************************************!*\
  !*** ./application/controllers/MainController.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainController; });


class MainController{

    constructor( $scope , LocaleService , $translate , localStorageService , $mdDialog ){


        $scope.localStorageService = localStorageService;

        $scope.updateTranslations = function ( lang ){
            $scope.mainLang = lang;
            $translate.use(lang);
            $scope.localStorageService.set( 'lang' , lang );

        }

        $scope.showDialog = async function ($event , message){

           let translation = await $translate('LAYOUT_CLOSE');

            $mdDialog.show({
                parent: angular.element(document.body),
                targetEvent: $event,
                controller: MainController,
                template: `
                    <md-dialog-content class="pop-up-content">
                        <h4>${message}</h4>
                    </md-dialog-content>
                    <md-dialog-actions>
                        <md-button ng-click="closeDialog()" class="md-primary">${translation}</md-button>
                    </md-dialog-actions>
                `
            });

        };

        $scope.closeDialog = function (){

            $mdDialog.hide();

        };

    }//constructor

}

/***/ }),

/***/ "./application/directives/CartDirective.js":
/*!*************************************************!*\
  !*** ./application/directives/CartDirective.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CartDirective; });



function CartDirective (){

    return{

        restrict: 'A',
        scope: {
            product:'='
        },
        templateUrl: 'templates/directives/cart-directive.html',

        controller: ['$scope', 'ProductService','CartService', function  ($scope, ProductService,  CartService){

                 ProductService.getSingleProduct($scope.product.ProductID)
                     .then (response=>{
                         $scope.product.description = response.ProductDescription;

                     })
                     .catch(error=>{
                         console.log(error);
                     })

                 $scope.cart = CartService.getCart();


                 $scope.RemoveProduct = function  (product){

                     let index=-1;
                     for(let i=0; i<$scope.cart.length; i++){
                         if($scope.cart[i]['ProductID'] === product.ProductID) {
                             index = i;
                         }
                     }

                     $scope.cart.splice( index , 1 );
                     CartService.changeStorageService($scope.cart);


                 }

                 $scope.ChangeProductAmount= function  (product){

                     if(product.amount==0){
                         $scope.RemoveProduct(product);
                     }

                     $scope.$parent.$parent.Total=CartService.total();

                     CartService.changeStorageService($scope.cart);
                 }


        }  ]
    }

}


/***/ }),

/***/ "./application/directives/LangsOptionDirective.js":
/*!********************************************************!*\
  !*** ./application/directives/LangsOptionDirective.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LangsOptionDirective; });



function LangsOptionDirective( ){

    return {

        restrict: 'A',
        template: '',
        scope: {
            'langs': '='
        },
        controller: [ '$scope', 'localStorageService' , '$translate' , function ( $scope , localStorageService , $translate){

            if(localStorageService.get('lang')){
                $scope.currentLang = localStorageService.get('lang');
            }//if
            else{
                $scope.currentLang = $scope.langs[0].languageTitle;
            }//else

            $scope.changeLanguage = function ( newLanguage ){

                $scope.$parent.updateTranslations( newLanguage );

                localStorageService.set( 'lang' , newLanguage );

                $translate.use(localStorageService.get('lang'));

            };

        } ],
        link: function ( scope, element, attrs, controller, transcludeFn ){

            let options = '<option value="RU" >Язык</option>';

            scope.langs.forEach( (lang) => {

                if(scope.currentLang === lang.languageTitle){
                    options += `<option value="${lang.languageTitle}" selected >${lang.languageTitle}</option>`;
                }//if
                else{
                    options += `<option value="${lang.languageTitle}">${lang.languageTitle}</option>`;
                }//else


            } );

            element.html( options );

            new SelectFx(
                document.querySelector('#langs'),{
                    onChange: scope.changeLanguage
                }
            );




        }//link

    }//LangsListDirective {}

}//LangsListDirective ()

/***/ }),

/***/ "./application/directives/ProductDirective.js":
/*!****************************************************!*\
  !*** ./application/directives/ProductDirective.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductDirective; });



function ProductDirective( ){

    return {

        restrict: 'A',
        scope: {
            product: '='
        },
        templateUrl: 'templates/directives/product-directive.html',
        controller: [ '$scope' , 'CartService' , function ( $scope , CartService){

            $scope.changeAmount = function ( newAmount ){
                $scope.product.amount = newAmount;
                
                
            }

            $scope.AddProduct = function ( product ){
                product.isInCart = true;
                CartService.addProduct( product );

            }
            

            
        } ],
        link: function ( scope , element ){

            new SelectFx(
                element.context.querySelector('select.cs-select'),
                {
                    onChange: scope.changeAmount // let val = this.value; scope.changeAmount( val )
                }
            );
            ripplyScott.init('.button', 0.75);

        }
    }

}

/***/ }),

/***/ "./application/directives/SingleProductDirective.js":
/*!**********************************************************!*\
  !*** ./application/directives/SingleProductDirective.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SingleProductDirective; });


function SingleProductDirective() {

    return {

        restrict:'A',
        scope:{
            product:'=',
            tabs: '='
        },
        templateUrl: 'templates/directives/single-product-directive.html',
        controller:['$scope', 'CartService', function  ($scope, CartService){

            $scope.cart = CartService.getCart();

            $scope.ChangeAmount= function (product) {

                for(let i=0; i<$scope.cart.length; i++){
                    if($scope.cart[i].ProductID===product.ProductID){
                        $scope.cart[i].amount = product.amount;
                    }//if
                }//for

                CartService.changeStorageService($scope.cart);
            }//ChangeAmount
            
            $scope.AddProduct = function (product) {

                let count=0;
                for(let i=0; i<$scope.cart.length; i++){

                    if($scope.cart[i].ProductID===product.ProductID){
                        count++;
                    }//if
                }//for
                
                if(count===0){
                    let newProduct =CartService._getSimpleProduct(product);
                    newProduct.isInCart=true;
                    CartService.addProduct(newProduct);
                }//if
                

                
            }//AddProduct
        }
        ],

        link: function  (scope, element){



                    /*
                    get snap amount programmatically or just set it directly (e.g. "273")
                    in this example, the snap amount is list item's (li) outer-width (width+margins)
                    */
                    var amount=Math.max.apply(Math,$(".tabsContent li").map(function(){return $(this).outerWidth(true);}).get());

                    $(".tabsContent").mCustomScrollbar({
                        axis:"x",
                        theme:"inset",
                        advanced:{
                            autoExpandHorizontalScroll:true
                        },
                        scrollButtons:{
                            enable:true,
                            scrollType:"stepped"
                        },
                        keyboard:{scrollType:"stepped"},
                        snapAmount:amount,
                        mouseWheel:{scrollAmount:amount}
                    });

            ripplyScott.init('.button', 0.75);


        }


    }

}

/***/ }),

/***/ "./application/filters/DescriptionFilter.js":
/*!**************************************************!*\
  !*** ./application/filters/DescriptionFilter.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DescriptionFilter; });


function DescriptionFilter (){
    
    return function (str, maxLength) {

        if( !str ) return '';

        return str.length < maxLength ? str : `${str.substring(0, maxLength)}...`;
    }

}


/***/ }),

/***/ "./application/services/ApiService.js":
/*!********************************************!*\
  !*** ./application/services/ApiService.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ApiService; });



class ApiService{

    constructor(
        $http ,
        PASS ,

    ){

        this._$http = $http;
        this._PASS = PASS;

    }

    async sendMessage(userName, userEmail,userPhone,userMessage){

        try {

            let request = await this._$http.post( `${this._PASS.HOST}${this._PASS.POST_FEEDBACK}` , {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: {
                    'userName': userName,
                    'userEmail': userEmail,
                    'userPhone': userPhone,
                    'userMessage': userMessage,
                }
            });

            return request.data;
        }//try
        catch(ex){
            console.log(ex);
        }//catch

    }//sendMessage



}//ApiService

/***/ }),

/***/ "./application/services/CartService.js":
/*!*********************************************!*\
  !*** ./application/services/CartService.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CartService; });



class CartService{


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

/***/ }),

/***/ "./application/services/LocaleService.js":
/*!***********************************************!*\
  !*** ./application/services/LocaleService.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LocaleService; });



class LocaleService{

    constructor(
        $http ,
        PASS ,

    ){

        this._$http = $http;
        this._PASS = PASS;

    }

    async getLangs(){
      
            let response = await this._$http.get( `${this._PASS.HOST}${this._PASS.GET_LANGS}` );

            return response.data.data;
    }//getLangs

    async getTranslations( lang ){

        let sourceUrl = this._PASS.GET_TRANSLATIONS.replace('{{LANG}}' , lang.toUpperCase());
        console.log('SOURCE URL:' , sourceUrl);


        let response = await this._$http.get( `${this._PASS.HOST}${sourceUrl}` );

        return response.data;


    }//getTranslations

}

/***/ }),

/***/ "./application/services/NewsService.js":
/*!*********************************************!*\
  !*** ./application/services/NewsService.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NewsService; });


class NewsService{

    constructor($http ,
                PASS ,){

        this._$http = $http;
        this._PASS = PASS;

    }//constructor

    async getNews(){

        let response = await this._$http.get(`${this._PASS.HOST}${this._PASS.GET_NEWS}?limit=4&offset=0` )


        return response.data.data;
    }//getNews
}

/***/ }),

/***/ "./application/services/ProductService.js":
/*!************************************************!*\
  !*** ./application/services/ProductService.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductService; });


class ProductService{

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

    async getSingleProduct(productID){

        let id = this._PASS.GET_PRODUCT.replace('{{ProductID}}' , productID);

        let response = await this._$http.get(`${this._PASS.HOST}${id}`);

        return response.data;

    }//getSingleProduct

}

/***/ })

/******/ });
//# sourceMappingURL=index.js.map