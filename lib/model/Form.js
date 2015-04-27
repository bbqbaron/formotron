var bmr = require('beemer'),
	Fields = require('../collection/Fields');

var Form = bmr.Model.extend({
	initialize: function(options) {
		this.set('local', this.get('original').clone());
		this.set('fields', Fields.fromModel(this.get('local'), this.get('spec')));
	},

	submit: function() {
		var errors = this.get('fields').validate().concat(this.validate());
		if (errors.length === 0) {
			// is this the correct idiom?
			this.get('original').set(this.get('local').toJSON());
			this.get('original').save();
		}
	},

	// override
	validate: function() {
		return [];
	}
});

module.exports = Form;