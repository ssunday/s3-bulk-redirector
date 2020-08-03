# S3 Bulk Redirector

[![NPM](https://nodei.co/npm/s3-bulk-redirector.png)](https://nodei.co/npm/s3-bulk-redirector)

Uses the [x-amz-website-redirect-location](https://docs.aws.amazon.com/AmazonS3/latest/dev/how-to-page-redirect.html) to set bulk redirects for a given S3 bucket. Routing rules have a max limit whereas this does not.

Given a CSV file with the `from` and `to` redirect values comma separated (no header), it'll create S3 objects with the appropriate metadata so that they redirect properly when hitting those routes.

## Install

`npm install --save-dev s3-bulk-redirector`

## Usage

`s3-bulk-redirector -c CSV_FILE -b BUCKET`

*If you use a named AWS Profile, prefix the command with AWS_PROFILE=X.*

Options:

- `-c` CSV file with `from` and `to` values to redirect. **Required**
- `-b` S3 Bucket to add the redirects objects to. **Required**
- `-p` Flag to set S3 Object ACL as private instead of public

### Example CSV

```
/foo/,/bar/
/one,/two/place
```

## Development

### Setup

- `npm install`

### Commands

- Run: `./s3-bulk-redirector.js` with flags to test out
- Test: `npm run test` or `npm run test:watch`

## Changelog

### 1.1.2

- Update dependencies

### 1.1.1

- Update dependencies

### 1.1.0

- Update dependencies
- Add private flag (`-p`) to set private ACL for S3 objects

### 1.0.1

Update to push new README version

### 1.0.0

Initial release
