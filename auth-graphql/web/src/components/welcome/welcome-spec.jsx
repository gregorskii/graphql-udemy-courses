/* eslint-disable func-names, prefer-arrow-callback */

import React from 'react';
import { shallow } from 'enzyme';
import { spy } from 'sinon';

import { WelcomeComponent } from 'components/welcome';

// Use describe to group similar tests
describe('Welcome', function() {
  describe('rendering', function() {
    beforeEach(function() {
      this.testApiSpy = spy();
      this.wrapper = shallow(<WelcomeComponent testApi={this.testApiSpy} />);
    });

    // Use 'it' to test a single attribute of a target
    it('should show the correct text', function() {
      // Use expect to make an assertion about a target
      expect(this.wrapper.find('div')).to.have.text('Welcome!');
    });
  });
});
