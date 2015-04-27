/* jshint expr:true */
var bmr = require('beemer'),
	chai = require('chai'),
	expect = chai.expect,
	Widget = require('../../../lib/view/widget/Widget');

describe('Widget', function() {
	it('should instantiate', function() {
		expect(new Widget({model: new bmr.Model()})).to.be.ok;
	});
});
