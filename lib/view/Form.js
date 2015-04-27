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

	onRender: function() {
		console.log('onRender');
		this.getRegion('main').show(
			new FieldSet({collection: this.model.get('fields')
		}));
	},

	errorsCallback: function(model, error) {
		this.getRegion('msg').show(
			new bmr.ItemView({
				model: model,
				template: _.template('<span rv-value="model:errors"></span>')
			})
		);
	}
});

module.exports = Form;