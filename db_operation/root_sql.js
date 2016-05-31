/**
 * Created by xymeow on 16/5/30.
 */
var root = {
    allUsers: 'select * from allUser',
    allResvs: 'select * from resvinfo',
    allRoutes: 'select fromCity, arivCity from Flights',
    addflight: 'insert into Flights values(?, ?, ?, ?, ?, ?)',
    addroom: 'insert into Hotels values(?, ?, ?, ?)',
    addcar: 'insert into Cars values(?, ?, ?, ?)',
    delflight: 'delete from Flights where flightNum=?',
    updateflight: 'update Flights set price=?, numSeats=?, numAvail=?, fromCity=?, arivCity=? where flightNum=?'
};

module.exports = root;