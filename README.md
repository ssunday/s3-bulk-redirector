# S3 Bulk Redirector

[![NPM](https://nodei.co/npm/s3-bulk-redirector.png)](https://nodei.co/npm/s3-bulk-redirector)

Uses the [x-amz-website-redirect-location](https://docs.aws.amazon.com/AmazonS3/latest/dev/how-to-page-redirect.html) to set bulk redirects for a given S3 bucket. Routing rules have a max limit whereas this does not.

Given a CSV file with the `from` and `to` redirect values comma separated (no header), it'll create S3 objects with the appropriate metadata so that they redirect properly when hitting those routes.

## Install

`npm install --save-dev s3-bulk-redirector`

## Usage

`s3-bulk-redirector -c CSV_FILE -b BUCKET`

*If you use a named AWS Profile, prefix the command with AWS_PROFILE=X.*

Options (all required):

- `-c` CSV File to redirect based on.
- `-b` S3 Bucket you have access to to add the redirects objects.

## Development

### Setup

- `npm install`

### Commands

- Run: `./s3-bulk-redirector.js `
- Test: `npm run test` or `npm run test:watch`
