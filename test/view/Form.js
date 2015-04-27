var bmr = require('beemer'),
	chai = require('chai'),
	expect = chai.expect,
	FormModel = require('../../lib/model/Form'),
	FormView = require('../../lib/view/Form');

describe('Form', function() {
	it('should instantiate', function() {
		expect(new FormView()).to.be.ok;
	});

	describe('onRender', function() {
		it('should show FieldSet on render', function() {
			var m = new bmr.Model({foo: 'bar'});
			var f = new FormModel({
				original: m
			});
			var v = new FormView({
				model: f
			});

			// v.onRender();

			// expect(v.getRegion('main').view).to.be.ok;
		});
	});
});