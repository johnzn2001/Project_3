var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/Majors', function(req, res, next) {
  res.send('respond with a resource');
});

//----------- TEMPORARY FUNCTION -------------
router.get('/Sample', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;