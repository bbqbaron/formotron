/* jshint expr:true */
var bmr = require('beemer'),
	chai = require('chai'),
	expect = chai.expect,
	equate = require('../../lib/util/equate');

describe('equate', function() {
	it('should link two models', function() {
		var m1 = new bmr.Model();
		var m2 = new bmr.Model();
		equate('foo', 'foo', m1, m2);
		m1.set('foo', 'bar');
		expect(m2.get('foo')).to.equal('bar');
		m2.set('foo', 'baz');
		expect(m1.get('foo')).to.equal('baz');
	});
});
