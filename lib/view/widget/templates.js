var _ = require('lodash'),
	checkbox = require('../../template/Checkbox.html'),
	input = require('../../template/Input.html');

var types = {
	CHECKBOX: checkbox,
	INPUT: input
};

module.exports = {
	get: function get(name) {
		if (!name) {
			return types.INPUT;
		}
		return types[name];
	}
}