/* jshint expr:true */
var bmr = require('beemer'),
	chai = require('chai'),
	expect = chai.expect,
	Fields = require('../../lib/collection/Fields');

describe('Fields', function() {
	it('should instantiate', function() {
		expect(new Fields()).to.be.ok;
	});

	describe('fromModel', function() {
		it('should map to model attributes', function() {
			var model = new bmr.Model({foo: 'bar', baz: 'quux'});
			var fields = Fields.fromModel(model);
			expect(fields.findWhere({attribute: 'foo', master: model}).cid).to.be.ok;
			expect(fields.findWhere({attribute: 'baz', master: model}).cid).to.be.ok;
			expect(fields.length).to.equal(2);
		});
	});

	describe('getErrors', function() {
		it('should return a flattened array of errors', function() {
			var M = bmr.Model.extend();
			var F = new Fields([new M({errors: ['foo']}), new M({errors: ['foo']})]);
			expect(F.getErrors()).to.deep.equal(['foo', 'foo']);
		});
	});
});
