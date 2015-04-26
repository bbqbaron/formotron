var bmr = require('beemer');

var Form = bmr.Model.extend({
	initialize: function(options) {
		bmr.Model.prototype.initialize.apply(this);

		this.original = this.model;
		this.model = this.original.copy();
		this.fields = Fields.fromModel(this.model);
	},

	validate: function() {
		return _.compact(this.map(
			function(field) {
				return field.validate();
			}
		));
	}
})