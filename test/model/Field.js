/* jshint expr:true */
var bmr = require('beemer'),
	chai = require('chai'),
	expect = chai.expect,
	Field = require('../../lib/model/Field'),
	Required = require('../../lib/util/rule/Required');

describe('Field', function() {
	describe('initialize', function() {
		it('should create a rules list by default', function() {
			var field = new Field({master: new bmr.Model(), attribute: 'foo'});
			expect(field.get('rules')).to.deep.equal([]);
		});

		it('should link to master', function() {
			var master = new bmr.Model();
			var field = new Field({master: master, attribute: 'foo'});
			field.set('value', 'bar');
			expect(master.get('foo')).to.equal('bar');
			master.set('foo', 'baz');
			expect(field.get('value')).to.equal('baz');
		});

		it('should re-validate on value changes', function() {
			var master = new bmr.Model();
			var field = new Field({master: master, attribute: 'foo', rules: [Required]});
			field.set('value', 'bar');
			expect(master.get('foo')).to.equal('bar');
			master.set('foo', '');
			expect(field.get('errors').length).to.equal(1);
		});
	});

	describe('validate', function() {
		it('should apply some rules', function() {
			var M = new bmr.Model({foo: ''});
			var F = new Field({attribute: 'foo', master: M, rules: [Required]});
			expect(F.validate()).to.be.ok;
		});
	});
});
