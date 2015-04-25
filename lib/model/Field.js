var _ = require('lodash'),
	bmr = require('beemer');

function equate(name1, name2, model1, model2) {
	function setter(model, name) {
		return _.bind(function(otherModel, value, options) {
			model.set(name, value);
		}, model);
	}

	model1.listenTo(model2, 'change:'+name2, setter(model1, name1));
	model2.listenTo(model1, 'change:'+name1, setter(model2, name2));
}

var Field = bmr.Model.extend({
	initialize: function(options) {
		var master = options.master;
		var attribute = options.attribute;
		equate(attribute, 'value', master, this);
	}
});

module.exports = Field;