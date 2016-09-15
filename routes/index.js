var express = require('express');
var resources = require('../controllers/resources')
var runList = require('../controllers/runlist')

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Controller', devices:  resources.listDevices(), runOnList: runList.runList()});
});

module.exports = router;
