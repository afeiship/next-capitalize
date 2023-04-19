require('../src');

describe('api.basic test', () => {
  test('nx.capitalize', function () {
    expect(nx.capitalize('abc')).toBe('Abc');
  });
});
