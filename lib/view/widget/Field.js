var bmr = require('beemer'),
	template = require('../../template/Field.html'),
	Widget = require('./Widget');

var Field = bmr.LayoutView.extend({
	initialize: function() {
		bmr.LayoutView.prototype.initialize.apply(this, arguments);
		this.setRegionView('widget', new Widget({model: this.model}));
	},

	template: template
});

module.exports = Field;
