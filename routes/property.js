var express = require('express')
var propertyrouter = express.Router()

propertyrouter.get('/', function (req, res) {
	res.send('Property Home');
})

module.exports = propertyrouter;