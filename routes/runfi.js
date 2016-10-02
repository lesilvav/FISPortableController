var express = require('express');
var resources = require('../controllers/resources');
var runList = require('../controllers/runlist');
var target = require('../controllers/target');
var Run = require('../model/run');
var router = express.Router();

/* GET run FI*/
router.get('/', function(req, res, next) {
  //creates a RUN object
  var run = new Run(req);

  //Search for an available device
  var availableDevice = resources.searchAvailableDevice(run.platformToRun); 
  if (typeof availableDevice !== 'undefined') {
    //block de device
    resources.blockDevice(availableDevice, run);
    //Run Portable Suite on target
    target.runDeviceOnTarget(availableDevice, req);
  } else {
    //Queue the run until a device is available
    runList.addRun(run);
  }
  res.send(availableDevice);
});

module.exports = router;
