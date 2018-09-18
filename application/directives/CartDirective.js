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



            // CartService.getProductsInCart($scope.product.productID)
            //          .then( p => {
            //
            //                  p.amount = $scope.product.amount || 1;
            //                  $scope.product = p;
            //                  console.log('PRODUCT-CART' , p );
            //
            //                  $scope.Total = CartService.total(p.productPrice , p.amount);
            //
            //          } )
            //          .catch(error=>{
            //              console.log(error);
            //          });
            //
            //
                 $scope.cart = CartService.getCart();

                 $scope.RemoveProduct = function  (product){

                     let index=-1;
                     for(let i=0; i<$scope.cart.length; i++){
                         if($scope.cart[i]['ProductID'] === product.ProductID) {
                             index = i;
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

                     console.log(product);
                     console.log($scope.products);

                     $scope.$parent.$parent.Total = CartService.total($scope.products);

                     CartService.changeStorageService($scope.cart);
                 }


        }  ]
    }

}
