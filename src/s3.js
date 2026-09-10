const { S3 } = require('@aws-sdk/client-s3');

const PUBLIC_READ = 'public-read';
const PRIVATE = 'private';
const s3Client = new S3({ region: process.env.AWS_REGION, profile: process.env.AWS_PROFILE });

const emptyBuffer = Buffer.from('');

function buildRedirectObject(bucket, from, to, options) {
  return {
    ACL: options.private ? PRIVATE : PUBLIC_READ,
    Body: emptyBuffer,
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
exports.applyRedirect = (bucket, from, to, options = {}) => {
  const object = buildRedirectObject(bucket, from, to, options);
  s3Client.putObject(object, handleError);
  console.log("> Redirected from /" + from + " to " + to);
}
