var bmr = require('beemer'),
	chai = require('chai'),
	expect = chai.expect,
	Field = require('../../../lib/view/widget/Field');

describe('Field', function() {
	it('should instantiate', function() {
		expect(new Field({model: new bmr.Model()})).to.be.ok;
	});
});