var express = require('express');
var resources = require('../controllers/resources')
var router = express.Router();


/* GET run FI*/
router.get('/', function(req, res, next) {
  var platform = req.query.platform;

  resources.printDevices();

  //Search for an available device
  var availableDevice = resources.searchAvailableDevice(platform); 
  if (typeof availableDevice !== 'undefined') {
    //block de device
    resources.blockDevice(availableDevice);
    resources.printDevices();
    
    //Run Portable Suite on target
  }
 
  res.send(availableDevice);
});

/* POST run FI*/
router.post('/', function(req, res, next) {
  res.send('POST runID: ' + req.param('runID'));
});

module.exports = router;
