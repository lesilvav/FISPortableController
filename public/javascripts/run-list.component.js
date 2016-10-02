angular.module('starterApp').
component('runList',{
    template: `<p>Length:{{ctrl.queue.length}}</p>
                <md-list-item ng-repeat="run in ctrl.queue">
                    <label>
                        Run ID: {{run.id}} / Platform: {{run.platform}}
                    </label>
                </md-list-item>`,
    controllerAs: 'ctrl',
    controller: function RunListController($scope, $http) {
        // when landing on the page, we display the Queue.
        $http.get('/api/resources/runlist')
            .success(function(data) {
                $scope.ctrl.queue = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    } 
});