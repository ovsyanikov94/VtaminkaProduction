"use strict";


export default  function BlogDirective( ){

    return {

        restrict: 'A',
        scope: {
            new: '='
        },
        templateUrl: 'templates/directives/blog-directive.html',
        controller: [ '$scope' , 'CartService' , function ( $scope , CartService){

            $scope.changeAmount = function ( newAmount ){
                $scope.product.amount = newAmount;


            }

            $scope.AddProduct = function ( product ){
                product.isInCart = true;
                CartService.addProduct( product );

            }



        } ],

    }

}