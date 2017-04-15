/* eslint-disable func-names, prefer-arrow-callback */

import React from 'react';
import { mount } from 'enzyme';

import Home from 'pages/home';
import Welcome from 'components/welcome';
import { Provider } from 'react-redux';
import store from 'src/store';
import { MemoryRouter } from 'react-router-dom';

describe('Home', function() {
  describe('rendering', function() {
    beforeEach(function() {
      this.wrapper = mount(
        <MemoryRouter>
          <Provider store={store}>
            <Home />
          </Provider>
        </MemoryRouter>
      );
    });

    it('should contain the Welcome component', function() {
      expect(this.wrapper).to.contain(<Welcome />);
    });
  });
});
