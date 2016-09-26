angular.module('mainCtrlSrv').
component('deviceList',{
    template: `<p>Length:{{ctrl.devices.length}} - Test:{{ctrl.lastId}}</p>
                <div ng-repeat="device in ctrl.devices">
                    <label>
                        Device ID: {{device.id}} / Type: {{device.type}} / Status: {{device.status}} / Target: {{device.target}} / RunID: {{device.runId}}
                    </label>
                </div>`,
    controllerAs: 'ctrl',
    controller: function DeviceListController($scope, $http, socket) {
        // when landing on the page, we display all devices.
        this.lastId='Luis';

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