/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import REDUCERS from 'reducers';

describe('Reducers Export', function() {
  it('should export an object with actions', function() {
    expect(typeof REDUCERS).to.equal('function');
  });
});
