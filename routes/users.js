var express = require('express');
var router = express.Router();
var DBI = require('../db_operation/DBI');

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('user: '+req.session.user);
  DBI.pathView(req, res, next);
  DBI.routeView(req, res, next);
  res.render('user', { title: '' , username: req.session.user});
});

router.get('/add', function (req, res, next) {
  DBI.add(req, res, next);
});

router.get('/flights', function (req, res, next) {
  DBI.myFlights(req, res, next);
});

router.get('/hotels', function (req, res, next) {
  DBI.myHotels(req, res, next);
});

router.get('/cars', function (req, res, next) {
  DBI.myCars(req, res, next);
});

router.get('/route', function (req, res, next) {
  DBI.myRoute(req, res, next);
});

router.get('/routeIntergrity', function (req, res, next) {
  DBI.routeIntergrity(req, res, next);
});

router.post('/resv', function (req, res, next) {
  DBI.resv(req, res, next);
});

router.post('/cancel', function (req, res, next) {
  DBI.cancel(req, res, next);
});



module.exports = router;
