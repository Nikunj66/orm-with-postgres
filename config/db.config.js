const Sequelize = require('sequelize');


const sequelize=new Sequelize("dbCustomer","postgres","root",{
    host:"localhost",
    dialect:"postgres",
    operatorsAliases:0,
    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    }
    
})

const db= {};
db.sequelize=sequelize;
db.Sequelize=Sequelize;

db.customers=require('../model/customer.model.js')(sequelize,Sequelize);

module.exports=db;
