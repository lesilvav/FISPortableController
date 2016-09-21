var express = require('express');
var resources = require('../controllers/resources');
var queue = require('../controllers/runlist');
var router = express.Router();


/* GET run FI*/
router.get('/devicelist', function(req, res, next) {
    res.json(resources.listDevices()); //return all devices on json format
});

router.get('/runlist', function(req, res, next) {
    res.json(queue.runList()); //return all runs in the queue on json format
});

module.exports = router;
