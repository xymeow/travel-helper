/**
 * Created by xymeow on 16/5/26.
 */
var user = {
    addUser: 'insert into Customers(custName) values(?)',
    update: 'update Customers set custName=?',
    delete: 'delete from Customers where custName=?',
    queryAll: 'select * from Customers',
    cancel: 'delete from Reservations where custName=? and resvType=? and resvKey=?',
    resv: 'insert into Reservations values(?, ?, ?)',
    myRoute: 'select * from ??',
    routeIntergrity: 'select city from ?? where fcity <> acity',
    myPathView: 'create view ?? as select fromCity, arivCity from Flights where flightNum in (' +
    'select resvKey from Reservations where custName = ? and resvType = 0)',
    myRouteView: 'create view ?? as select city, sum(fcity) as fcity, sum(acity) as acity from ' +
    '( select fromCity as city, count(fromCity) as fcity, 0 as acity from ?? group by fromCity ' +
    'union select arivCity as city, 0 as fcity, count(arivCity) as acity from ?? group by arivCity)' +
    'as temp group by city',
    myFlights: 'select flightNum, price, 1 as resNum, fromCity, arivCity from Flights where flightNum in (' +
    '               select resvKey from Reservations where custName = ? and resvType = 0)',
    myHotels: 'select location, price, 1 as resNum from Hotels where location in (' +
    '               select resvKey from Reservations where custName = ? and resvType = 1)',
    myCars: 'select location, price, 1 as resNum from Cars where location in (' +
    '               select resvKey from Reservations where custName = ? and resvType = 2) '
};

module.exports = user;