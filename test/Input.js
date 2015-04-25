var bmr = require('beemer'),
	chai = require('chai'),
	expect = chai.expect,
	Input = require('../lib/view/Input');

describe('Input', function() {
	it('should instantiate', function() {
		expect(new Input({model: new bmr.Model()})).to.be.ok;
	});
});