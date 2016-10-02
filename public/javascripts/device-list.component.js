angular.module('starterApp').
component('deviceList',{
    templateUrl: '../templates/device-list.html',
    controllerAs: 'ctrl',
    controller: function DeviceListController($scope, $http, socket) {
        // when landing on the page, we display all devices.
        $http.get('/api/resources/devicelist')
            .success(function(data) {
                $scope.ctrl.devices = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });

        socket.on('update-device', function (data) {
            $scope.ctrl.devices.forEach(function(value){
                if (value.id == data.id){
                    value.status=data.status;
                    value.runId=data.runId;
                    console.log("Device " + value.id + " was updated");
                }
            });
        });
    } 
});