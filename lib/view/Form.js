var _ = require('lodash'),
	bmr = require('beemer'),
	FieldSet = require('./FieldSet'),
	Input = require('./Input');

var Form = bmr.LayoutView.extend({
	onRender: function() {
		this.getRegion('main').show(
			new FieldSet({collection: this.model.get('fields')
		}));
	},

	modelEvents: {
		'change:errors': function(model, error) {
			this.getRegion('msg').show(
				new bmr.ItemView({
					model: model,
					template: _.template('<span rv-value="model:errors"></span>')
				});
			);
		}
	},

	regions: {
		main: 'bmr-main',
		msg: 'bmr-msg'
	}
});

module.exports = Form;