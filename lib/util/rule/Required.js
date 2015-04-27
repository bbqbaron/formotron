var _ = require('lodash'),
	equate = require('../../util/equate'),
	ErrorModel = require('../../model/Error'),
	Rule = require('./Rule');

var Required = _.assign(_.clone(Rule), {
	validate: function(model) {
		if (!(_.isString(model.get('value')) && model.get('value').length > 0)) {
			return new ErrorModel({
				text: 'The field ' + model.get('attribute') + ' is required'
			});
		}
		return null;
	}
});

module.exports = Required;
