/**
 * Module to allow some target operations.
 */
var http = require('http');

exports.runDeviceOnTarget = function (deviceId) {
    console.log("Run Portable Suite on target");
    http.get({hostname: 'localhost',port: 3001,
        path: '/runfi?deviceid=' + deviceId,
        agent: false}, 
        (res) => {
            console.log(res.statusMessage);
        }
    ); 
};