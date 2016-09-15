var express = require('express');
var resources = require('../controllers/resources')
var runList = require('../controllers/runlist');
var target = require('../controllers/target');
var router = express.Router();


/* GET run FI*/
router.get('/', function(req, res, next) {
  var deviceId = req.query.deviceid;
  var resMsg = "";
  
  Console.log("release de device: " + deviceId);
  if (typeof deviceId !== 'undefined') {
    Console.log("release de device");
    resources.releaseDevice(deviceId);
  }
  //next();
  res.send();
},function(req, res) {
  var device = resources.searchById(req.query.deviceid);
  var run = {platform:device.platform};
  run = runList.searchRun(run);
  if (run !== 'undefined') {
    var availableDevice = resources.searchAvailableDevice(platform); 
    if (typeof availableDevice !== 'undefined') {
      //block de device
      resources.blockDevice(availableDevice, run.id);
      //run the target
      target.runDeviceOnTarget(availableDevice.deviceId);  
    } else {
      //Queue the run until a device is available
      runList.addRun(run);
    };
  };
  res.send();
});

module.exports = router;
