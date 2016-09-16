/**
 * Module to manage the list of Runs waiting for a device.
 */

//List of Runs
var runList = [];

exports.runList = function () {return runList};

/** 
 * Add Run to the list
 */
exports.addRun = function (run) {
    console.log("One item added to the run list: " + run);
    runList.push(run);
}

/**
 *Search for Run using the following searching criterias:
 *platform 
 */
exports.searchRun = function(run){
    console.log("searching a run for platform: " + run.platform);
    var retRun;
    runList.some(function(value,index,array){
        if (value.platform == run.platform){
            //Set return Run object
            retRun = value;
            //Remove the Run from the List.
            runList.splice(index,1);
            //exit from the loop 
            return true;
        }
    });
    return retRun;
}
