var _ = require('lodash');

function equate(name1, name2, model1, model2) {
	function setter(model, name) {
		return _.bind(function(otherModel, value, options) {
			model.set(name, value);
		}, model);
	}

	// it's interesting that this doesn't generate an infinite loop.
	// there must be some notion of an originating event ID under the hood.
	model1.listenTo(model2, 'change:'+name2, setter(model1, name1));
	model2.listenTo(model1, 'change:'+name1, setter(model2, name2));
}

module.exports = equate;