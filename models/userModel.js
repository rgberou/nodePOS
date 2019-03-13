var Sequelize = require('sequelize');

var config = require('../database.json')['dev'];
var password = config.password ? config.password : null;
// initialize database connection
var sequelize = new Sequelize(
    config.database,
    config.user,
    config.password,
    {
        dialect: config.driver,
        logging: console.log,
        define: {
            timestamps: false
        }
    }
);


var userModel=require('../config/userConfig');
var User=userModel.usermodel(sequelize,Sequelize);




exports.addUser = function(req){

    //Hospitalization.upsert({where: {'Doctor.SysPK_Doctor' : req.params.id, 'IsServed_Encounter' : 0, 'Date_Encounter' : req.params.dte}, include: [Patient, Doctor]}).then(
      //  function(encounters){
        //    res.jsonp(encounters);
        //});

    User.create({
            fname: req.fname,
            lname: req.lname,
            password:req.password
  })
  .complete(function(err, socialUrl) {
    if (err) {
      // log error;
    } else {
      // Do stuff
    }
  })
};
