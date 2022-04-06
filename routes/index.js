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

//----------- TEMPORARY FUNCTION -------------
router.get('/Sample', function(req, res, next) {
  res.render('Sample', { title: 'TAMU Engineering Dictionary of Majors' });
});

/* GET about page. */
router.get('/About', function(req, res, next) {
  res.render('About', { title: 'TAMU Engineering Dictionary of Majors' });
});

/* GET departments page. */
router.get('/Departments', function(req, res, next) {
  res.render('Departments', { title: 'TAMU Engineering Dictionary of Majors' });
});

module.exports = router;
