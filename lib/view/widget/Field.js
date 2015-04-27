var _ = require('lodash'),
	bmr = require('beemer'),
	templates = require('../widget/templates');

var Field = bmr.ItemView.extend({
	initialize: function() {
		if (!this.model.has('widget')) {
			this.template = templates.get();
		} else {
			this.template = templates.get(this.model.get('widget'));
		}
	}
});

module.exports = Field;