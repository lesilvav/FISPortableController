/**
 * Module to allow some target operations.
 */
var http = require('http');

exports.runDeviceOnTarget = function (device) {
    console.log("Run Portable Suite on target");
    http.get({hostname: device.target,port: 3001,
        path: '/runfi?deviceid=' + device.id + '&runid=' + device.runId,
        agent: false}, 
        (res) => {
            console.log(res.statusMessage);
        }
    ); 
};