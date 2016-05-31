var express = require('express');
var router = express.Router();
var DBI = require('../db_operation/DBI');

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log(req.session.user);
    if (req.session.user) {
        if (req.session.user == 'root')
            res.render('root');
        else
            res.render('logined', {username: req.session.user});
    }
    else
        res.render('index');
});

router.post('/login', function (req, res, next) {
  var name = req.query.custName || req.params.custName;
  // console.log(name);
  if (name) {
          req.session.user=name;
          DBI.add(req, res, next);
      // res.redirect('logined');
  }
});

router.get('/logout', function (req, res, next) {
    req.session.user = null;
    req.session.error = null;
    res.redirect('/');
});

module.exports = router;
