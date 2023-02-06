#!/usr/bin/env node

const program = require('commander');

const formatter = require('./src/formatter');
const s3 = require('./src/s3');
const parser = require('./src/parser');

program
  .version('1.1.5')
  .option('-c, --csv-file <CSV_FILE>', 'CSV File to read list of redirects')
  .option('-b, --bucket <S3_BUCKET>', 'S3 Bucket to serve redirects from')
  .option('-p, --private', 'Use to set object ACL to private ACL instead of public')
  .parse(process.argv);

const programOptions = program.opts();

const csvFile = programOptions.csvFile;
const bucket = programOptions.bucket;

if (csvFile === undefined || bucket === undefined) {
  program.outputHelp();
} else {
  const options = {
    private: programOptions.private !== undefined
  };

  parser.parseCSV(csvFile, (redirects) => {
    redirects.forEach((redirect) => {
      s3.applyRedirect(
        bucket,
        formatter.formatFrom(redirect.from),
        formatter.formatTo(redirect.to),
        options
      );
    });
  });
}
