var express = require('express');
var resources = require('../controllers/resources')
var runList = require('../controllers/runlist');
var target = require('../controllers/target');
var router = express.Router();


/* GET run FI*/
router.get('/', function(req, res, next) {
  var deviceId = req.query.deviceid;
  var resMsg = "";
  
  console.log("release de device: " + deviceId);
  if (typeof deviceId !== 'undefined') {
    console.log("release de device");
    resources.releaseDevice(deviceId);
  }
  next();
},function(req, res) {
  console.log("Verify if there is any Run waiting on the queue")
  var device = resources.searchById(req.query.deviceid);
  console.log("Device recently released platform: " + device.type)
  var run = {platform:device.type};
  console.log("Initial Run platform: " + run.platform)
  run = runList.searchRun(run);
  console.log("Run on the queue: " + run)
  if ( run != null) {
    console.log("A Run was found in the queue. Start searching for an available device");
    var availableDevice = resources.searchAvailableDevice(run.platform); 
    if ( availableDevice != null) {
      console.log("Device was found. Will be block");
      resources.blockDevice(availableDevice, run.id);
      console.log("run the target");
      target.runDeviceOnTarget(availableDevice);  
    } else {
      console.log("Queue the run until a device is available");
      runList.addRun(run);
    };
  }else{
    console.log("There is no Run in the queue");
  };
  res.send();
});

module.exports = router;
