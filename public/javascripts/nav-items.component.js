angular.module('starterApp').
component('navItems',{
    template: `<md-list>
                <md-list-item ng-repeat="it in ctrl.items">
                    <md-button ng-click="selectItem(it)" ng-class="{'selected' : it === ctrl.selected }">
                        <md-icon md-svg-icon="{{it.icon}}" class="avatar"></md-icon>
                        {{it.name}}
                    </md-button>
                </md-list-item>
            </md-list>`,
    controllerAs: 'ctrl',
    controller: function NavItemsController($scope, navItemsService) {
        var self = $scope.ctrl;
        self.selected     = null;
        self.items        = [ ];

        // Load all registered nav items
        navItemsService
            .loadAllItems()
            .then( function( items ) {
                console.log(items);
                self.items    = [].concat(items);
                self.selectItem = items[0];
            });

        /**
         * Select the current item
         * @param item
         */
        $scope.selectItem = function(item){
            self.selected = angular.isNumber(item) ? self.items[item] : item;
        }
    } 
});