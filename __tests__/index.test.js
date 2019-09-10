import testFunction from '../src/servers/file';

describe('test jest works', () => {
  it('should multiply stuff', () => {
    const a = testFunction(1, 2);
    expect(a).toEqual(2);
  });
});
