const sequalizeinstance = require('../db/pglocalconnection');
var Sequelize = require('sequelize')

let PropertyModel = sequalizeinstance.define('property',{
    name        : Sequelize.STRING, 
    type        : Sequelize.STRING, 
    description : Sequelize.STRING,
    lat         : Sequelize.STRING, 
    lon         : Sequelize.STRING 
},{
    tableName: 'property'
})

module.exports = PropertyModel