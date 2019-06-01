var express = require('express')
routemain = express.Router()
var propertyroute = require('./property'); 


routemain.use('/property', propertyroute)


routemain.get('/',function(req, res) {
	res.send('Hello Guy!')
})


module.exports = routemain;