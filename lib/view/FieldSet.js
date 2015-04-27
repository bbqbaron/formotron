var _ = require('lodash'),
	bmr = require('beemer'),
	Field = require('./widget/Field');

var FieldSet = bmr.CollectionView.extend({
	childView: Field
});

module.exports = FieldSet;