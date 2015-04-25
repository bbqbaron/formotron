var _ = require('lodash'),
	bmr = require('beemer');

function equate(name, model1, model2) {
	function setter(model) {
		return _.bind(function(otherModel, value, options) {
			model.set(name, value);
		}, model);
	}

	model1.listenTo(model2, 'change:'+name, setter(model1));
	model2.listenTo(model1, 'change:'+name, setter(model2));
}

var Input = bmr.ItemView.extend({
	initialize: function(options) {
		var attribute = options.attribute;
		delete options.attribute;

		bmr.ItemView.prototype.initialize.apply(this);
		this.viewModel = new bmr.Model({value: ''});
		// or just template the attribute name into the binding string?
		equate(attribute, this.model, this.viewModel);
	}
});

module.exports = Input;