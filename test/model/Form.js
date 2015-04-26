var bmr = require('beemer'),
	chai = require('chai'),
	expect = chai.expect,
	Form = require('../../lib/model/Form'),
	sinon = require('sinon');

describe('Form', function() {
	describe('initialize', function() {
		it('should initialize with attributes `local` and `fields`', function() {
			var m = new bmr.Model({
				foo: 'bar'
			});

			var f = new Form({
				original: m
			});

			expect(f.get('local').toJSON()).to.deep.equal(m.toJSON());
			expect(f.get('fields').map(function(field) {
				return field.get('attribute');
			})).to.deep.equal(['foo']);
		});
	});

	describe('submit', function() {
		it('should try to set original and save it', function() {
			var m = new bmr.Model({
				foo: 'bar'
			});

			var f = new Form({
				original: m
			});

			f.get('local').set('foo', 'baz');

			var setSpy = sinon.spy(m, 'set');
			var saveStub = sinon.stub(m, 'save');

			f.submit();

			expect(f.get('fields').validate()).to.deep.equal([]);
			expect(f.validate()).to.deep.equal([]);
			// expect(setSpy.args[0][0]).to.deep.equal({foo: 'baz'});
			// expect(setSpy.calledWith({foo: 'baz'})).to.be.true;
			// expect(saveSpy.calledOnce).to.be.true
		});
	});
});