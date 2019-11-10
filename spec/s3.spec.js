const s3 = require('../src/s3');

describe('s3', () => {
  describe('applyRedirect', () => {
    s3.client.putObject = jest.fn();

    it('calls put object with no options', () => {
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

    it('calls put object with private ACL when private option set to true', () => {
      s3.applyRedirect('bucket', '/from', '/to', { private: true });

      expect(s3.client.putObject).toHaveBeenCalledWith(
        {
          ACL: 'private',
          Body: '',
          Bucket: 'bucket',
          Key: '/from',
          WebsiteRedirectLocation: '/to'
        },
        s3.handleError
      );
    });

    it('calls put object with public ACL when private option set to false', () => {
      s3.applyRedirect('bucket', '/from', '/to', { private: false });

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
