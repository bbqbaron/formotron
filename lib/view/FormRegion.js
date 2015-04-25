var _ = require('lodash'),
	bmr = require('beemer'),
	Input = require('./Input');

var FormRegion = bmr.CollectionView.extend({
	childView: Input
});

module.exports = FormRegion;