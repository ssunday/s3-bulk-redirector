const s3 = require('../src/s3');

describe('s3', () => {
  describe('applyRedirect', () => {
    it ('calls put object', () => {
      s3.client.putObject = jest.fn();
      s3.applyRedirect('bucket', '/from', '/to');

      expect(s3.client.putObject).toHaveBeenCalledWith({
        ACL: 'public-read',
        Body: '',
        Bucket: 'bucket',
        Key: '/from',
        WebsiteRedirectLocation: '/to'
      }, s3.handleError);
    });
  });
});
