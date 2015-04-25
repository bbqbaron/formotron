var bmr = require('beemer'),
	chai = require('chai'),
	expect = chai.expect,
	Fields = require('../lib/collection/Fields');

describe('Fields', function() {
	it('should instantiate', function() {
		expect(new Fields()).to.be.ok;
	});
});

describe('Fields.fromModel', function() {
	it('should map to model attributes', function() {
		var model = new bmr.Model({foo: 'bar', baz: 'quux'});
		var fields = Fields.fromModel(model);
		expect(fields.findWhere({attribute: 'foo', master: model}).cid).to.be.ok;
		expect(fields.findWhere({attribute: 'baz', master: model}).cid).to.be.ok;
		expect(fields.length).to.equal(2);
	});
});