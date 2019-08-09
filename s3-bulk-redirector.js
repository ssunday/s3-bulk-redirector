#!/usr/bin/env node

const program = require('commander');

const formatter = require('./src/formatter');
const s3 = require('./src/s3');
const parser = require('./src/parser');

program
  .version('1.0.0')
  .option('-c, --csv-file <CSV_FILE>', 'CSV File to make redirects from')
  .option('-b, --bucket <S3_BUCKET>', 'S3 Bucket to serve redirects from')
  .parse(process.argv);

if (program.csvFile === undefined || program.bucket === undefined) {
  program.outputHelp();
} else {
  parser.parseCSV(program.csvFile, (redirects) => {
    redirects.forEach((redirect) => {
      s3.applyRedirect(
        program.bucket,
        formatter.formatFrom(redirect.from),
        formatter.formatTo(redirect.to)
      );
    });
  });
}
