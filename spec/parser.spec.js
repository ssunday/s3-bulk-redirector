const parser = require('../src/parser');

describe('parser', () => {
  describe('parseCSV', () => {
    it('runs through csv and returns all rows with from/to', () => {
      const csv = './spec/fixtures/test-csv.csv';

      parser.parseCSV(csv, (results) => {
        expect(results).toEqual([
          {
            "from": "foo",
            "to": "bar"
          },
          {
            "from": "one",
            "to": "two"
          },
        ]);
      });
    });
  });
});
