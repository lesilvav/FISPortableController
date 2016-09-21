var express = require('express');
var resources = require('../controllers/resources');
var runList = require('../controllers/runlist');
var target = require('../controllers/target');
var router = express.Router();


/* GET run FI*/
router.get('/', function(req, res, next) {
  console.log("Request params:" + req.query);
  var platform = req.query.PLATFORMTORUN;
  var runId = req.query.RUNID;

  //Search for an available device
  var availableDevice = resources.searchAvailableDevice(platform); 
  if (typeof availableDevice !== 'undefined') {
    //block de device
    resources.blockDevice(availableDevice, runId);
    //Run Portable Suite on target
    target.runDeviceOnTarget(availableDevice, req);
  } else {
    //Queue the run until a device is available
    var run = {id:runId, platform:platform};
    runList.addRun(run);
  }
  res.send(availableDevice);
});

module.exports = router;
