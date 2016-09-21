var indexCtrl = angular.module('indexCtrl', []);

function mainController($scope, $http) {
    $scope.formData = {};

    // when landing on the page, we display all devices.
    $http.get('/api/resources/devicelist')
        .success(function(data) {
            $scope.devices = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    // when landing on the page, we display the Queue.
    $http.get('/api/resources/runlist')
        .success(function(data) {
            $scope.queue = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
}
