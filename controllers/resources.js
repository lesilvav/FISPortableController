/**
 * Module to manage the registered devices.
 */

//List of registered resources
var listDevices = [
    {id:"20",type:"android",status:"unblock",target:"192.168.1.223", runId:""},
    {id:"21",type:"ios",status:"unblock",target:"192.168.1.223", runId:""},
    {id:"22",type:"android",status:"unblock",target:"192.168.0.249", runId:""},
    {id:"23",type:"ios",status:"unblock",target:"192.168.0.249", runId:""}];

exports.listDevices = function () {return listDevices};

/**
 * Search a Device by its Id
 */
exports.searchById = function (deviceId){
    console.log("searching device by id: " + deviceId);
    var retDevice;
    console.log("initial return device: " + retDevice);
    listDevices.some(function(value,index){
        console.log("inside some. value: " + value + " index: " + index);
        if (value.id == deviceId){
            console.log("fund device: " + value + " on index: " + index);
            retDevice = listDevices[index];
            console.log("return device: " + value);
            return true;
        }
    });
    console.log("final return device: " + retDevice);
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