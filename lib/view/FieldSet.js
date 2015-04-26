var _ = require('lodash'),
	bmr = require('beemer'),
	Input = require('./Input');

var FieldSet = bmr.CollectionView.extend({
	childView: Input
});

module.exports = FieldSet;