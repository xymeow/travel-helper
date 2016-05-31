/**
 * Created by xymeow on 16/5/26.
 */
var express = require('express');
var router = express.Router();
var DBI = require('../db_operation/DBI');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('search', { title: '', username: req.session.user });
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

module.exports = router;
