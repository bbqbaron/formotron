/* jshint expr:true */
var bmr = require('beemer'),
	chai = require('chai'),
	expect = chai.expect,
	FormModel = require('../../lib/model/Form'),
	FormView = require('../../lib/view/Form'),
	FieldSet = require('../../lib/view/FieldSet'),
	sinon = require('sinon');

describe('Form', function() {
	it('should instantiate', function() {
		expect(new FormView({model: new bmr.Model()})).to.be.ok;
	});

	it('should activate FieldSet on init', function() {
		var m = new bmr.Model({foo: 'bar'});
		var f = new FormModel({
			original: m
		});
		var v = new FormView({
			model: f
		});

		// yep
		FieldSet.prototype.foo = 'bar';

		expect(v.getRegionView('main').foo).to.equal('bar');

		delete FieldSet.prototype.foo;
	});

	describe('errorsCallback', function() {
		it('should show errors', function() {
			var m = new bmr.Model({foo: 'bar'});
			var f = new FormModel({
				original: m
			});
			var v = new FormView({
				model: f
			});

			var setSpy = sinon.spy(v, 'setRegionView');

			// the API for errors is not currently very robust
			f.set('errors', 'foo');

			expect(setSpy.callCount).to.equal(1);
			expect(setSpy.args[0][0]).to.equal('msg');
			setSpy.reset();
		});
	});
});
