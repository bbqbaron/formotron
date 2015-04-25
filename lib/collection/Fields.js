var _ = require('lodash'),
	bmr = require('beemer'),
	Field = require('../model/Field');

var Fields = bmr.Collection.extend({
	model: Field
});

function fromModel(model, spec) {
	var fields = new Fields();
	_.each(spec || model.attributes, function(fieldSpec, attribute) {
		fields.add(new Field({master: model, attribute: attribute}));
	});
	return fields;
}

Fields.fromModel = fromModel;

module.exports = Fields;