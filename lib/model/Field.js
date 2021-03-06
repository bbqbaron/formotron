var _ = require('lodash'),
	bmr = require('beemer'),
	equate = require('../util/equate');

var Field = bmr.Model.extend({
	initialize: function() {
		this.set('value', this.get('master').get(this.get('attribute')));
		equate(this.get('attribute'), 'value', this.get('master'), this);
		if (!this.has('rules')) {
			this.set('rules', []);
		}
		// computed attribute
		this.listenTo(this, 'change:value', this.updateErrors);
	},

	updateErrors: function() {
		this.set('errors', this.validate());
	},

	validate: function() {
		return _.compact(
			this.get('rules').map(function(rule) {
				return rule.validate(this);
			}, this)
		);
	}
});

module.exports = Field;