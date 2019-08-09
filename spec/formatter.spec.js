const formatter = require('../src/formatter');

describe('formatter', () => {
  describe('formatTo', () => {
    const expectedString = '/foo';

    it('returns path if format OK', () => {
      expect(formatter.formatTo('/foo')).toBe(expectedString);
    });

    it('adds slash to beginning if not present', () => {
      expect(formatter.formatTo('foo')).toBe(expectedString);
    });
  });

  describe('formatFrom', () => {
    const expectedString = 'foo/index.html';

    it('returns path if format OK', () => {
      expect(formatter.formatFrom('foo/index.html')).toBe(expectedString);
    });

    it('adds slash to end if not present and adds index.html', () => {
      expect(formatter.formatFrom('foo')).toBe(expectedString);
    });

    it('removes forward slash', () => {
      expect(formatter.formatFrom('/foo')).toBe(expectedString);
    });
  });
});
