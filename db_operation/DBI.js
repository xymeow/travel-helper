var mysql = require('mysql');
var $conf = require('../conf/db');
// var $util = require('../util/util');
var $sql_user = require('./user_sql');
var $sql_search = require('./search_sql');
var $sql_root = require('./root_sql');
// 使用连接池，提升性能

var pool = mysql.createPool($conf.mysql);

// 向前台返回JSON方法的简单封装
var jsonWrite = function (res, ret) {
    if(typeof ret === 'undefined') {
        res.json({
            code:'1',
            msg: '操作失败'
        });
    } else {
        res.json(ret);
    }
};

module.exports = {
    add: function (req, res, next) { //add user
        pool.getConnection(function (err, connection) {
            var param = req.query || req.params;
            console.log(req.session.user);
            connection.query($sql_user.addUser, [req.session.user], function (err, result) {
                if (result) {
                    result = {
                        code: 0,
                        msg: 'success'
                    };
                    console.log('sucess');
                }

                else {
                    result = {
                        code: 1,
                        msg: 'add fail'
                    };
                    console.log('fail');
                }
                // res.render('index', {result: result});
                jsonWrite(res, result);
                // res.render('logined', {username: req.session.user});
                connection.release();

                // console.log('release');
            });
        });
    },
    addflight: function (req, res, next) { //add user
        pool.getConnection(function (err, connection) {
            var param = req.query || req.params;
            // console.log(req.session.user);
            for (var i in param) {
                if (!i)
                    return;
            }
            connection.query($sql_root.addflight, [param.num, param.price, param.seat, param.seat
            , param.from, param.ariv], function (err, result) {
                if (result) {
                    result = {
                        code: 0,
                        msg: '添加成功'
                    };
                    console.log('sucess');
                }

                else {
                    result = {
                        code: 1,
                        msg: '添加失败'
                    };
                    console.log('fail');
                }
                // res.render('index', {result: result});
                jsonWrite(res, result);
                // res.render('logined', {username: req.session.user});
                connection.release();

                // console.log('release');
            });
        });
    },
    updateflight: function (req, res, next) { //add user
        pool.getConnection(function (err, connection) {
            var param = req.query || req.params;
            // console.log(req.session.user);
            for (var i in param) {
                if (!i)
                    return;
            }
            connection.query($sql_root.updateflight, [ param.price, param.seat, param.seat
                , param.from, param.ariv, param.num], function (err, result) {
                if (result) {
                    result = {
                        code: 0,
                        msg: '更新成功'
                    };
                    console.log('sucess');
                }

                else {
                    result = {
                        code: 1,
                        msg: '更新失败'
                    };
                    console.log('fail');
                }
                // res.render('index', {result: result});
                jsonWrite(res, result);
                // res.render('logined', {username: req.session.user});
                connection.release();

                // console.log('release');
            });
        });
    },
    delflight: function (req, res, next) { //add user
        pool.getConnection(function (err, connection) {
            var param = req.query || req.params;
            // console.log(req.session.user);
            connection.query($sql_root.delflight, [param.key], function (err, result) {
                if (result) {
                    result = {
                        code: 0,
                        msg: '删除成功'
                    };
                    console.log('sucess');
                }

                else {
                    result = {
                        code: 1,
                        msg: '删除失败'
                    };
                    console.log('fail');
                }
                // res.render('index', {result: result});
                jsonWrite(res, result);
                // res.render('logined', {username: req.session.user});
                connection.release();

                // console.log('release');
            });
        });
    },
    addroom: function (req, res, next) { //add user
        pool.getConnection(function (err, connection) {
            var param = req.query || req.params;
            for (var i in param) {
                if (!i)
                    return;
            }
            connection.query($sql_root.addroom, [param.loc, param.price, param.num, param.num], function (err, result) {
                if (result) {
                    result = {
                        code: 0,
                        msg: '添加成功'
                    };
                    console.log('sucess');
                }

                else {
                    result = {
                        code: 1,
                        msg: '添加失败'
                    };
                    console.log('fail');
                }
                // res.render('index', {result: result});
                jsonWrite(res, result);
                // res.render('logined', {username: req.session.user});
                connection.release();

                // console.log('release');
            });
        });
    },
    addcar: function (req, res, next) { //add user
        pool.getConnection(function (err, connection) {
            var param = req.query || req.params;
            for (var i in param) {
                if (!i)
                    return;
            }
            connection.query($sql_root.addcar, [param.loc, param.price, param.num, param.num], function (err, result) {
                if (result) {
                    result = {
                        code: 0,
                        msg: '添加成功'
                    };
                    console.log('sucess');
                }

                else {
                    result = {
                        code: 1,
                        msg: '添加失败'
                    };
                    console.log('fail');
                }
                // res.render('index', {result: result});
                jsonWrite(res, result);
                // res.render('logined', {username: req.session.user});
                connection.release();

                // console.log('release');
            });
        });
    },
    resv: function (req, res, next) { //add user
        pool.getConnection(function (err, connection) {
            var param = req.query || req.params;
            connection.query($sql_user.resv, [req.session.user, param.resvType, param.resvKey], function (err, result) {
                if (result) {
                    result = {
                        code: 0,
                        msg: '预订成功'
                    };
                    console.log('sucess');
                }

                else {
                    result = {
                        code: 1,
                        msg: '预订失败,每人仅能预订一个房间/机票/的士'
                    };
                    console.log('fail');
                }
                // res.render('index', {result: result});
                jsonWrite(res, result);
                // res.render('logined', {username: req.session.user});
                connection.release();
                // console.log('release');
            });
        });
    },

    cancel: function (req, res, next) { //add user
        pool.getConnection(function (err, connection) {
            var param = req.query || req.params;
            connection.query($sql_user.cancel, [req.session.user, param.resvType, param.resvKey], function (err, result) {
                if (result) {
                    result = {
                        code: 0,
                        msg: '取消成功'
                    };
                    console.log('sucess');
                }

                else {
                    result = {
                        code: 1,
                        msg: '取消失败,请重试'
                    };
                    console.log('fail');
                }
                // res.render('index', {result: result});
                jsonWrite(res, result);
                // res.render('logined', {username: req.session.user});
                connection.release();
                // console.log('release');
            });
        });
    },

    pathView: function (req, res, next) { //add user
        pool.getConnection(function (err, connection) {
            var param = req.query || req.params;
            console.log('pathview user:'+req.session.user);
            connection.query($sql_user.myPathView, [req.session.user+'_path', req.session.user], function (err, result) {
                if (result) {
                    result = {
                        code: 0,
                        msg: '取消成功'
                    };
                    console.log('sucess');
                }

                else {
                    result = {
                        code: 1,
                        msg: '取消失败,请重试'
                    };
                    console.log('fail');
                }
                // res.render('index', {result: result});
                //jsonWrite(res, result);
                // res.render('logined', {username: req.session.user});
                connection.release();
                // console.log('release');
            });
        });
    },

    routeView: function (req, res, next) { //add user
        pool.getConnection(function (err, connection) {
            var param = req.query || req.params;
            console.log('routeview user:'+req.session.user);
            connection.query($sql_user.myRouteView, [req.session.user+'_route',
                req.session.user+'_path', req.session.user+'_path'], function (err, result) {
                if (result) {
                    result = {
                        code: 0,
                        msg: '取消成功'
                    };
                    console.log('sucess');
                }

                else {
                    result = {
                        code: 1,
                        msg: '取消失败,请重试'
                    };
                    console.log('fail');
                }
                // res.render('index', {result: result});
                //jsonWrite(res, result);
                // res.render('logined', {username: req.session.user});
                connection.release();
                // console.log('release');
            });
        });
    },

    searchFlight: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            connection.query($sql_search.searchFlights, function (err, result) {
                jsonWrite(res, result);
                connection.release();
            })
        })
    },
    searchHotels: function (req, res, next) {
        pool.getConnection(function (err, connection) {

            connection.query($sql_search.searchHotels, function (err, result) {
                jsonWrite(res, result);
                connection.release();
            })
        })
    },
    searchCars: function (req, res, next) {
        pool.getConnection(function (err, connection) {

            connection.query($sql_search.searchCars, function (err, result) {
                jsonWrite(res, result);
                connection.release();
            })
        })
    },
    myFlights: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            connection.query($sql_user.myFlights, [req.session.user], function (err, result) {
                jsonWrite(res, result);
                connection.release();
                console.log('myflight');
            })
        })
    },
    myHotels: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            connection.query($sql_user.myHotels, [req.session.user], function (err, result) {
                jsonWrite(res, result);
                connection.release();
                console.log('myhotel');
            })
        })
    },
    myCars: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            connection.query($sql_user.myCars, [req.session.user], function (err, result) {
                jsonWrite(res, result);
                connection.release();
                console.log('mycar');
            })
        })
    },
    myRoute: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            connection.query($sql_user.myRoute, [req.session.user+'_path'], function (err, result) {
                jsonWrite(res, result);
                connection.release();
                console.log('myroute');
            })
        })
    },
    allUsers: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            connection.query($sql_root.allUsers, function (err, result) {
                jsonWrite(res, result);
                connection.release();
                console.log('allusers');
            })
        })
    },
    allResvs: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            connection.query($sql_root.allResvs, function (err, result) {
                jsonWrite(res, result);
                connection.release();
                console.log('allresvs');
            })
        })
    },
    allRoutes: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            connection.query($sql_root.allRoutes, function (err, result) {
                jsonWrite(res, result);
                connection.release();
                console.log('allroutes');
            })
        })
    },
    routeIntergrity: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            connection.query($sql_user.routeIntergrity, [req.session.user+'_route'], function (err, result) {
                jsonWrite(res, result);
                connection.release();
                console.log('myrouteintergrity');
            })
        })
    }
};