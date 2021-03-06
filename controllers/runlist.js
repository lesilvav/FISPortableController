/**
 * Module to manage the list of Runs waiting for a device.
 */

var socket = require('../sockets/base.js');

//List of Runs
var runList = [];

exports.runList = function () {return runList};

/** 
 * Add Run to the list
 */
exports.addRun = function (run) {
    console.log("One item added to the run list: " + run);
    runList.push(run);
    socket.addRunQueue(run);
}

/**
 *Search for Run using the following searching criterias:
 *platform 
 */
exports.searchRun = function(run){
    console.log("searching a run for platform: " + run.platformToRun);
    var retRun;
    runList.some(function(value,index,array){
        if (value.platformToRun == run.platformToRun){
            //Set return Run object
            retRun = value;
            //Remove the Run from the List.
            runList.splice(index,1);
            //Update Clients
            socket.removeRunQueue(retRun);
            //exit from the loop 
            return true;
        }
    });
    return retRun;
}
