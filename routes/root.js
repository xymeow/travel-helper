/**
 * Created by xymeow on 16/5/30.
 */
var express = require('express');
var router = express.Router();
var DBI = require('../db_operation/DBI');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('root', { });
});

router.get('/flights', function (req, res, next) {
    DBI.searchFlight(req, res, next);
});

router.get('/hotels', function (req, res, next) {
    DBI.searchHotels(req, res, next);
});

router.get('/cars', function (req, res, next) {
    DBI.searchCars(req, res, next);
});

router.get('/resvs', function (req, res, next) {
    DBI.allResvs(req, res, next);
});

router.get('/users', function (req, res, next) {
    DBI.allUsers(req, res, next);
});

router.get('/routes', function (req, res, next) {
    DBI.allRoutes(req, res, next);
});

router.post('/newflight', function (req, res, next) {
    // console.log('newflight');
    DBI.addflight(req, res, next);
});
router.post('/newroom', function (req, res, next) {
    DBI.addroom(req, res, next);
});
router.post('/newcar', function (req, res, next) {
    DBI.addcar(req, res, next);
});
router.post('/updateflight', function (req, res, next) {
    DBI.updateflight(req, res, next);
});
router.post('/delflight', function (req, res, next) {
    DBI.delflight(req, res, next);
});
module.exports = router;