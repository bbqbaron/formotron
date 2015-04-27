var _ = require('lodash'),
	checkbox = require('../../template/Checkbox.html'),
	input = require('../../template/Input.html'),
	select = require('../../template/Select.html'),
	textarea = require('../../template/TextArea.html');

var types = {
	CHECKBOX: checkbox,
	INPUT: input,
	SELECT: select,
	TEXTAREA: textarea
};

module.exports = {
	get: function get(name) {
		if (!name) {
			return types.INPUT;
		}
		if (!types[name]) {
			throw 'template not found for widget type: '+name;
		}
		return types[name];
	}
};
