var express = require('express');
var resources = require('../controllers/resources')
var router = express.Router();


/* GET run FI*/
router.get('/', function(req, res, next) {
  var deviceId = req.query.deviceid;
  var resMsg = "";

  if (typeof deviceId !== 'undefined') {
    //release de device
    resources.releaseDevice(deviceId);
    resources.printDevices();
    res.statusMessage = "Device " + deviceId + " was realeased";
  }else{
    res.statusMessage = "Device " + deviceId + "is not registered";
  }
  res.send();
});

/* POST run FI*/
router.post('/', function(req, res, next) {
  res.send('POST runID: ' + req.param('runID'));
});

module.exports = router;
