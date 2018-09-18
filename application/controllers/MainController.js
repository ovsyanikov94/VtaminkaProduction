"use strict";

export default class MainController{

    constructor( $scope , LocaleService , $translate , localStorageService , CategoryService , $mdDialog ){


        $scope.localStorageService = localStorageService;

        $scope.updateTranslations = function ( lang ){
            $scope.mainLang = lang;
            $translate.use(lang);
            $scope.localStorageService.set( 'lang' , lang );

        };

        CategoryService.getCategories()
            .then( categories => {
                $scope.categories = categories;
                $scope.$apply();
            } )
            .catch( error => console.log('error' , error) );

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