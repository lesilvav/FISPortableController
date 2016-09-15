/**
 * Module to manage the registered devices.
 */

//List of registered resources
var listDevices = [
    {id:"1",type:"android",status:"unblock",target:"macMini01", runId:""},
    {id:"4",type:"ios",status:"unblock",target:"macMini01", runId:""},
    {id:"5",type:"android",status:"unblock",target:"laptop01", runId:""},
    {id:"8",type:"android",status:"unblock",target:"laptop01", runId:""}];

exports.listDevices = function () {return listDevices};

/**
 * Search a Device by its Id
 */
exports.searchById = function (deviceId){
    var retDevice;
    listDevices.some(function(value,index){
        if (value.deviceId == deviceId){
            retDevice = listDevices[index];
            return true;
        }
    });

    return retDevice;
};

/** 
 * Search for an available devices
 */
exports.searchAvailableDevice = function (platform) {
    console.log("Searching available device");

    var availableDevice = listDevices.filter(function(item){
        return item.type==platform && item.status=="unblock";
    });
    
    //return the first available device
    if (availableDevice.length > -1){
        availableDevice = availableDevice[0];   
    }

    console.log("Available device on index: " + listDevices.indexOf(availableDevice));

    return availableDevice;
}

/**
 *Block a given device 
 */
exports.blockDevice = function(device, runId){
    console.log("Blocking device " + device.id);
    listDevices.forEach(function(value){
        if (value.id == device.id){
            value.status="blocked";
            value.runId=runId;
            console.log("Device blocked");
        }
    });
}

/**
 *Block a given device 
 */
exports.releaseDevice = function(deviceId){
    console.log("Releasing the device " + deviceId);
    listDevices.forEach(function(value){
        if (value.id == deviceId){
            value.status="unblock";
            value.runId="";
            console.log("Device " + deviceId + " unblock");
        }
    });
}

/**
 *Print the list of devices 
 */
exports.printDevices = function () {
    console.log(listDevices);
}