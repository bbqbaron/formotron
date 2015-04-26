var _ = require('lodash'),
	bmr = require('beemer'),
	Fields = require('../collection/Fields'),
	FieldSet = require('./FieldSet'),
	Input = require('./Input');

var Form = bmr.LayoutView.extend({
	onRender: function() {
		this.getRegion('main').show(
			new FieldSet({collection: this.model.get('fields')
		}));
	},

	regions: {
		main: 'bmr-main',
		msg: 'bmr-msg'
	},

	submit: function() {
		this.getRegion('msg').show(
			new bmr.ItemView({
				template: _.template(
					'<span>' + (this.model.isValid() ? 'valid' : this.model.getErrors()) + '</span>'
				)
			})
		);
	}
});

module.exports = Form;