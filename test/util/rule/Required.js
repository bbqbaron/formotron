/* jshint expr:true */
var bmr = require('beemer'),
	chai = require('chai'),
	expect = chai.expect,
	Field = require('../../../lib/model/Field'),
	Required = require('../../../lib/util/rule/Required');

describe('Required', function() {
	describe('validate', function() {
		it('should return an error on blank', function() {
			var M = new bmr.Model({foo: ''});
			var F = new Field({attribute: 'foo', master: M});
			expect(Required.validate(F)).to.be.ok;
		});
		it('should return null on a value', function() {
			var M = new bmr.Model({foo: 'bar'});
			var F = new Field({attribute: 'foo', master: M});
			expect(Required.validate(F)).to.be.null;
		});
	});
});
