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

router.get('/DEPT-ENGR', function(req, res, next) {
  res.render('DEPT-ENGR', { title: 'TAMU Engineering: College of Engineering' });
});

router.get('/DEPT-AERO', function(req, res, next) {
  res.render('DEPT-AERO', { title: 'TAMU Engineering: Department of Aerospace Engineering' });
});

router.get('/DEPT-BIO', function(req, res, next) {
  res.render('DEPT-BIO', { title: 'TAMU Engineering: Biomedical Engineering Department' });
});

router.get('/DEPT-CHEM', function(req, res, next) {
  res.render('DEPT-CHEM', { title: 'TAMU Engineering: Chemical Engineering Department' });
});

router.get('/DEPT-CIV', function(req, res, next) {
  res.render('DEPT-CIV', { title: 'TAMU Engineering: Civil and Environmental Engineering Department' });
});

router.get('/DEPT-ELEC', function(req, res, next) {
  res.render('DEPT-ELEC', { title: 'TAMU Engineering: Electrical and Computer Engineering Department' });
});

router.get('/DEPT-INDU', function(req, res, next) {
  res.render('DEPT-INDU', { title: 'TAMU Engineering: Engineering Technology and Industrialial Distribution Department' });
});

router.get('/DEPT-MATE', function(req, res, next) {
  res.render('DEPT-MATE', { title: 'TAMU Engineering: Materials Science and Engineering Department' });
});

router.get('/DEPT-MECH', function(req, res, next) {
  res.render('DEPT-MECH', { title: 'TAMU Engineering: Mechanical Engineering Department' });
});

router.get('/DEPT-MULT', function(req, res, next) {
  res.render('DEPT-MULT', { title: 'TAMU Engineering: Multidisciplinary Engineering Department' });
});

router.get('/DEPT-NUCL', function(req, res, next) {
  res.render('DEPT-NUCL', { title: 'TAMU Engineering: Nuclear Engineering Department' });
});

router.get('/DEPT-OCEA', function(req, res, next) {
  res.render('DEPT-OCEA', { title: 'TAMU Engineering: Ocean Engineering Department' });
});

router.get('/DEPT-PETR', function(req, res, next) {
  res.render('DEPT-PETR', { title: 'TAMU Engineering: Petroleum Engineering Department' });
});

router.get('/DEPT-INSY', function(req, res, next) {
  res.render('DEPT-INSY', { title: 'TAMU Engineering: Industrial and Systems Engineering' });
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

router.get('/BioMed', function(req, res, next) {
  res.render('BioMed', { title: 'TAMU Engineering: Biomedical Engineering' });
});

router.get('/Chem', function(req, res, next) {
  res.render('Chem', { title: 'TAMU Engineering: Chemical Engineering' });
});

router.get('/Civil', function(req, res, next) {
  res.render('Civil', { title: 'TAMU Engineering: Civil and Environmental Engineering' });
});

router.get('/Electrical', function(req, res, next) {
  res.render('Electrical', { title: 'TAMU Engineering: Electrical Engineering' });
});

router.get('/Computer', function(req, res, next) {
  res.render('Computer', { title: 'TAMU Engineering: Computer Engineering' });
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
  res.render('MultiDisc', { title: 'TAMU Engineering: Multidisciplinary Engineering Technology' });
});

router.get('/Nuclear', function(req, res, next) {
  res.render('Nuclear', { title: 'TAMU Engineering: Nuclear Engineering' });
});

router.get('/Ocean', function(req, res, next) {
  res.render('Ocean', { title: 'TAMU Engineering: Ocean Engineering' });
});

router.get('/Systems', function(req, res, next) {
  res.render('Systems', { title: 'TAMU Engineering: Industrial Engineering' });
});

router.get('/Computer', function(req, res, next) {
  res.render('Computer', { title: 'TAMU Engineering: Computer Engineering' });
});

router.get('/Environ', function(req, res, next) {
  res.render('Environ', { title: 'TAMU Engineering: Environmental Engineering' });
});

router.get('/Architec', function(req, res, next) {
  res.render('Architec', { title: 'TAMU Engineering: Architectural Engineering' });
});

router.get('/Electronic', function(req, res, next) {
  res.render('Electronic', { title: 'TAMU Engineering: Electronic Systems Engineering' });
});

router.get('/Distrib', function(req, res, next) {
  res.render('Distrib', { title: 'TAMU Engineering: Industrial Distribution' });
});

router.get('/Manufac', function(req, res, next) {
  res.render('Manufac', { title: 'TAMU Engineering: Manufacturing Engineering' });
});

router.get('/IntDisc', function(req, res, next) {
  res.render('IntDisc', { title: 'TAMU Engineering: Interdisciplinary Engineering' });
});

module.exports = router;
