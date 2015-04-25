var bmr = require('beemer'),
	chai = require('chai'),
	expect = chai.expect,
	Input = require('../lib/view/Input');

describe('Input', function() {
	it('should instantiate', function() {
		expect(new Input({model: new bmr.Model()})).to.be.ok;
	});
	it('should link the two models', function() {
		var model = new bmr.Model();
		var input = new Input({model: model, attribute: 'foo'});
		var viewModel = input.viewModel;
		viewModel.set('foo', 'bar');
		expect(model.get('foo')).to.equal('bar');
		model.set('foo', 'baz');
		expect(viewModel.get('foo')).to.equal('baz');
	});
});