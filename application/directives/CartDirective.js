"use strict";


export default function CartDirective (){

    return{

        restrict: 'A',
        scope: {
            product:'=',
            products: '='
        },
        templateUrl: 'templates/directives/cart-directive.html',

        controller: ['$scope', 'ProductService','CartService', function  ($scope, ProductService,  CartService){

                 $scope.cart = CartService.getCart();

                 $scope.RemoveProduct = function  (product){

                     let index=-1;
                     for(let i=0; i<$scope.cart.length; i++){
                         if($scope.cart[i]['productID'] === product.productID) {
                             index = i;
                             break;
                         }
                     }

                     $scope.cart.splice( index , 1 );
                     $scope.products.splice( index , 1 );
                     CartService.changeStorageService($scope.cart);

                     $scope.Total = CartService.total($scope.products);


                 }

                 $scope.ChangeProductAmount= function  (product){

                     if(product.amount === 0 ){
                         $scope.RemoveProduct(product);
                     }//if

                     $scope.$parent.$parent.Total = CartService.total($scope.products);

                     CartService.changeStorageService($scope.products);
                 }


        }  ]
    }

}
