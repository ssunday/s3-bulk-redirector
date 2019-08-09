const AWS = require('aws-sdk');

const PUBLIC_READ = 'public-read';
const s3Client = new AWS.S3({ profile: process.env.AWS_PROFILE });

function buildRedirectObject(bucket, from, to) {
  return {
    ACL: PUBLIC_READ,
    Body: '',
    Bucket: bucket,
    Key: from,
    WebsiteRedirectLocation: to
  }
}

function handleError(err, data) {
  if (err) console.log(err, err.stack);
}

exports.handleError = handleError;
exports.client = s3Client;
exports.applyRedirect = (bucket, from, to) => {
  const object = buildRedirectObject(bucket, from, to);
  s3Client.putObject(object, handleError);
  console.log("> Redirected from /" + from + " to " + to);
}
