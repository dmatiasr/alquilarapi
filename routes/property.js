var express = require('express')
var propertyrouter = express.Router()

const propertycontroller = require('../controllers/propertycontroller');

propertyrouter.get('/', function (req, res) {
	var data = propertycontroller.all(req, res);
	res.send(data);
})

module.exports = propertyrouter;