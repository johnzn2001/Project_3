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

/* GET Computer Science page. */
router.get('/CompSci', function(req, res, next) {
  res.render('CompSci', { title: 'TAMU Engineering: Computer Science' });
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
