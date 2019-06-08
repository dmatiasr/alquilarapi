var express = require('express')
var propertyrouter = express.Router()

const propertycontroller = require('../controllers/propertycontroller');

propertyrouter.get('/', function (req, res) {
	var data = propertycontroller.all(req, res);
	if (!data) res.status(404).send('Properties not found');
	res.send(data);
})
propertyrouter.post('/', function (req, res) {

	res.send('HICISTE POST');
})

module.exports = propertyrouter;