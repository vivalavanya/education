const { mock, map } = require('./mock');

describe('Map function:', () => {
	let array;
	let fn;

	beforeEach(() => {
		array = [1, 2, 3, 5];
		fn = jest.fn((x) => x ** 2);
		map(array, fn);
	});
	test('should call callback', () => {
		expect(fn).toBeCalled();
	});

	test('should call callback 4 times', () => {
		expect(fn).toBeCalledTimes(4);
		expect(fn.mock.calls.length).toBe(4);
	});
});
