var _ = require('lodash'),
	bmr = require('beemer'),
	FieldSet = require('./FieldSet');

var Form = bmr.LayoutView.extend({
	modelEvents: {
		'change:errors': 'errorsCallback'
	},

	regions: {
		main: 'bmr-main',
		msg: 'bmr-msg',
		title: 'bmr-title'
	},

	initialize: function() {
		bmr.LayoutView.prototype.initialize.apply(this, arguments);
		this.setRegionView('main',
			new FieldSet({collection: this.model.get('fields')})
		);
	},

	errorsCallback: function(model, error) {
		// an alternate option would of course be for this view to just show its
		// own errors; this region will never show anything but a relatively limited
		// set of messages.
		this.setRegionView('msg', 
			new bmr.ItemView({
				model: model,
				template: _.template('<span rv-value="model:errors"></span>')
			})
		);
	}
});

module.exports = Form;