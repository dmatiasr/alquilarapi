var PropertyList = require('../db/mockedproperty')

exports.all = function (req, res) {
	return PropertyList;
}
