var bmr = require('beemer'),
	chai = require('chai'),
	expect = chai.expect,
	Rule = require('../../../lib/util/rule/Rule');

describe('Rule', function() {
	describe('validate', function () {
		it('should return null', function() {
			expect(Rule.validate(new bmr.Model())).to.be.null;
		});
	});
});