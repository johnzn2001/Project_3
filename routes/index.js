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

/* GET CSCE Department page. */
router.get('/DEPT-CSCE', function(req, res, next) {
  res.render('DEPT-CSCE', { title: 'TAMU Engineering: Computer Science and Engineering Department' });
});

router.get('/Petrol', function(req, res, next) {
  res.render('Petrol', { title: 'TAMU Engineering: Petroleum Engineering' });
});

router.get('/Aero', function(req, res, next) {
  res.render('Aero', { title: 'TAMU Engineering: Aerospace Engineering' });
});

router.get('/Bio', function(req, res, next) {
  res.render('Bio', { title: 'TAMU Engineering: Biological and Agricultural Engineering' });
});

router.get('BioMed', function(req, res, next) {
  res.render('BioMed', { title: 'TAMU Engineering: Biomedical Engineering' });
});

router.get('/Chem', function(req, res, next) {
  res.render('Chem', { title: 'TAMU Engineering: Chemical Engineering' });
});

router.get('/Civil', function(req, res, next) {
  res.render('Civil', { title: 'TAMU Engineering: Civil and Environmental Engineering' });
});

router.get('/Electrical', function(req, res, next) {
  res.render('Electrical', { title: 'TAMU Engineering: Electrical and Computer Engineering' });
});

router.get('/Indus', function(req, res, next) {
  res.render('Indus', { title: 'TAMU Engineering: Engineering Technology and Industrial Distribution' });
});

router.get('/Materials', function(req, res, next) {
  res.render('Materials', { title: 'TAMU Engineering: Material Science and Engineering' });
});

router.get('/Mech', function(req, res, next) {
  res.render('Mech', { title: 'TAMU Engineering: Mechanical Engineering' });
});

router.get('/MultiDisc', function(req, res, next) {
  res.render('MultiDisc', { title: 'TAMU Engineering: Multidisciplinary Engineering' });
});

router.get('/Nuclear', function(req, res, next) {
  res.render('Nuclear', { title: 'TAMU Engineering: Nuclear Engineering' });
});

router.get('/Ocean', function(req, res, next) {
  res.render('Ocean', { title: 'TAMU Engineering: Ocean Engineering' });
});

router.get('/Systems', function(req, res, next) {
  res.render('Systems', { title: 'TAMU Engineering: Industrial and Systems Engineering' });
});

module.exports = router;
