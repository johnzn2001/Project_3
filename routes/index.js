var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'TAMU Engineering Dictionary of Majors' });
});

/* GET Majors page. */
router.get('/Majors', function(req, res, next) {
  res.render('Majors', { title: 'TAMU Engineering Dictionary of Majors' });
});


module.exports = router;
