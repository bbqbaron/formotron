var bmr = require('beemer'),
	chai = require('chai'),
	expect = chai.expect,
	Field = require('../lib/model/Field');

describe('Field', function() {
	it('should link to master', function() {
		var master = new bmr.Model();
		var field = new Field({master: master, attribute: 'foo'});
		field.set('value', 'bar');
		expect(master.get('foo')).to.equal('bar');
		master.set('foo', 'baz');
		expect(field.get('value')).to.equal('baz');
	});
});