const fs = require('fs');
const parse = require('csv-parse')

const parser = parse({
  columns: ['from', 'to'],
  trim: true,
  skip_empty_lines: true
});

function parseCSV(csv, onEnd) {
  let rows = [];

  fs.createReadStream(csv)
    .pipe(parser)
    .on('readable', function () {
      let row;
      while (row = this.read()) {
        rows.push(row);
      }
    })
    .on('error', function (err) {
      console.error(err.message)
    })
    .on('end', function () {
      onEnd(rows);
    });
}

exports.parseCSV = parseCSV;
