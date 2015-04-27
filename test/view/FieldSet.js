/* jshint expr:true */
var bmr = require('beemer'),
	chai = require('chai'),
	expect = chai.expect,
	FieldSet = require('../../lib/view/FieldSet');

describe('FieldSet', function() {
	it('should initialize', function() {
		expect(new FieldSet()).to.be.ok;
	});
});
