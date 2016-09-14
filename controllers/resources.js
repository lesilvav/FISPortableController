/**
 * Module to manage the registered devices.
 */

//List of registered devices
var listDevices = [
    {id:"1",type:"android",status:"unblock",target:"macMini01"},
    {id:"2",type:"android",status:"unblock",target:"macMini01"},
    {id:"3",type:"android",status:"unblock",target:"macMini01"},
    {id:"4",type:"ios",status:"unblock",target:"macMini01"},
    {id:"5",type:"android",status:"unblock",target:"laptop01"},
    {id:"6",type:"android",status:"unblock",target:"laptop01"},
    {id:"7",type:"android",status:"unblock",target:"laptop01"},
    {id:"8",type:"android",status:"unblock",target:"laptop01"}];

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
exports.blockDevice = function(device){
    console.log("Blocking device " + device.id);
    listDevices.forEach(function(value){
        if (value.id == device.id){
            value.status="blocked"
            console.log("Device blocked");
        }
    });
}

/**
 *Print the list of devices 
 */
exports.printDevices = function () {
    console.log(listDevices);
}