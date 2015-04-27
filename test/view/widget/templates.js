/* jshint expr:true */
var bmr = require('beemer'),
	chai = require('chai'),
	expect = chai.expect,
	templates = require('../../../lib/view/widget/templates');

describe('templates', function() {
	it('should return a default template', function() {
		expect(templates.get()).to.be.ok;
	});

	it('should return a template in response to a string', function() {
		expect(templates.get('CHECKBOX')).to.be.ok;
	});

	it('should raise in response to a bad string', function() {
		expect(function() {templates.get('FOO');}).to.throw('template not found for widget type: FOO');
	});
});
