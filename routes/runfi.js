var express = require('express');
var http = require('http');
var resources = require('../controllers/resources')
var router = express.Router();


/* GET run FI*/
router.get('/', function(req, res, next) {
  var platform = req.query.platform;
  var runId = req.query.runid;

  //Search for an available device
  var availableDevice = resources.searchAvailableDevice(platform); 
  if (typeof availableDevice !== 'undefined') {
    //block de device
    resources.blockDevice(availableDevice, runId);
    resources.printDevices();
    
    //Run Portable Suite on target
    http.get({hostname: 'localhost',port: 3001,
        path: '/runfi?deviceid=' + availableDevice.id,
        agent: false}, 
        (res) => {
            console.log(res.statusMessage);
        }
    );
  }
 
  res.send(availableDevice);
});

/* POST run FI*/
router.post('/', function(req, res, next) {
  res.send('POST runID: ' + req.param('runID'));
});

module.exports = router;
