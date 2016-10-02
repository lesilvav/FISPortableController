/**
 * Module to allow some target operations.
 */

var http = require('http');

exports.runDeviceOnTarget = function (device) {
    console.log("Run Portable Suite on target");
    http.get({hostname: device.target,port: 3001,
        path: '/api/runfi?deviceid=' + device.id + '&runid=' + device.run.id + '&urltobuild=' + device.run.urlToBuild 
            + '&username=' + device.run.userName + '&serverurl=' + device.run.serverUrl + '&androidbuildjob=' + device.run.androidBuildJob
            + '&servername=' + device.run.serverName + '&finame=' + device.run.fiName + '&useremail=' + device.run.reportEmailAddress
            + '&testplanid=' + device.run.testPlanId + '&platformtorun=' + device.run.platformToRun + '&featuretorun=' + device.run.featuresToRun,
        agent: false}, 
        (res) => {
            console.log(res.statusMessage);
        }
    );
};