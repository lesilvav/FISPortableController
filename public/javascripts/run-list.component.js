angular.module('mainCtrlSrv').
component('runList',{
    template: `<p>Length:{{ctrl.queue.length}}</p>
                <div ng-repeat="run in ctrl.queue">
                    <label>
                        Run ID: {{run.id}} / Platform: {{run.platformToRun}}
                    </label>
                </div>`,
    controllerAs: 'ctrl',
    controller: function RunListController($scope, $http, socket) {
        // when landing on the page, we display the Queue.
        $http.get('/api/resources/runlist')
            .success(function(data) {
                $scope.ctrl.queue = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
        socket.on('add-run-queue', function (data) {
            $scope.ctrl.queue.push(data.run);
        });
        socket.on('remove-run-queue', function (data) {
            $scope.ctrl.queue.some(function(value,index,array){
                if (value.id == data.run.id){
                    //Remove the Run from the Queue.
                    $scope.ctrl.queue.splice(index,1);
                    //exit from the loop 
                    return true;
                }
            });
        });     
    } 
});