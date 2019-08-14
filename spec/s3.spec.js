const s3 = require('../src/s3');

describe('s3', () => {
  describe('applyRedirect', () => {
    s3.client.putObject = jest.fn();

    it ('calls put object', () => {
      s3.applyRedirect('bucket', '/from', '/to');

      expect(s3.client.putObject).toHaveBeenCalledWith(
        {
          ACL: 'public-read',
          Body: '',
          Bucket: 'bucket',
          Key: '/from',
          WebsiteRedirectLocation: '/to'
        },
        s3.handleError
      );
    });
  });
});
