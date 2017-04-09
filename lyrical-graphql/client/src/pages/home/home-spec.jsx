/* eslint-disable func-names, prefer-arrow-callback */

import React from 'react';
import { mount } from 'enzyme';

import Home from 'pages/home';
import Welcome from 'components/welcome';
import { Provider } from 'react-redux';
import store from 'src/store';

describe('Home', function() {
  describe('rendering', function() {
    beforeEach(function() {
      this.wrapper = mount(
        <Provider store={store}>
          <Home />
        </Provider>
      );
    });

    it('should contain the Welcome component', function() {
      expect(this.wrapper).to.contain(<Welcome />);
    });
  });
});
