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
  //TODO: it comes from a TARGET request. Verify if it requires to be synchronized
  //to avoid a lock when at the same time the QA Tools Portal request a run.
  var device = resources.searchById(req.query.deviceid);

  console.log("Device recently released platform: " + device.type)
  var run = {platformToRun:device.type};
  
  console.log("Initial Run platform: " + run.platformToRun)
  run = runList.searchRun(run);
  
  if ( run != null) {
    console.log("Run on the queue: " + run)
    var availableDevice = resources.searchAvailableDevice(run.platformToRun); 
    if ( availableDevice != null) {
      resources.blockDevice(availableDevice, run);
      target.runDeviceOnTarget(availableDevice);  
    } else {
      runList.addRun(run);
    };
  }else{
    console.log("There is no Run in the queue");
  };
  res.send();
});

module.exports = router;
