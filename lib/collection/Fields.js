var bmr = require('beemer'),
	Field = require('../model/Field');

var Fields = bmr.Collection.extend({
	model: Field
});

module.exports = Fields;