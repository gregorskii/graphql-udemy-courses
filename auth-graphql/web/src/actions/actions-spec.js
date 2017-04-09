/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import ACTIONS from 'actions';

describe('Actions Export', function() {
  it('should export an object with actions', function() {
    expect(Object.keys(ACTIONS).length).to.be.above(0);
  });
});
