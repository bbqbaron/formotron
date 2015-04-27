var bmr = require('beemer'),
templates = require('../widget/templates');

var Widget = bmr.ItemView.extend({
	initialize: function() {
		if (!this.model.has('widget')) {
			this.template = templates.get();
		} else {
			this.template = templates.get(this.model.get('widget'));
		}
	}
});

module.exports = Widget;
