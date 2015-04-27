var _ = require('lodash'),
	bmr = require('beemer'),
	Field = require('../model/Field');

var Fields = bmr.Collection.extend({
	model: Field,

	validate: function() {
		return _.filter(
			this.map(function(field) {
				return field.validate();
			}),
			function(errors) {
				return errors.length > 0;
			}
		);
	}
});

function fromModel(model, spec) {
	return new Fields(
		_.map(spec || model.attributes, function(fieldSpec, attribute) {
			return new Field({
				attribute: attribute,
				master: model,
				rules: fieldSpec.rules
			});
		})
	);
}

Fields.fromModel = fromModel;

module.exports = Fields;