
    angular.module('starterApp')
        .controller('AppCtrl', ['$scope','navItemsService',function($scope,navItemsService){

            var self = $scope;
            self.selected     = null;
            self.items        = [ ];

            // Load all registered nav items
            navItemsService
                .loadAllItems()
                .then( function( items ) {
                    self.items    = [].concat(items);
                    self.selected = items[0];
                });
            /**
             * Select the current item
             * @param item
             */
            $scope.selectItem = function(item){
                self.selected = angular.isNumber(item) ? self.items[item] : item;
            }
        }]);
