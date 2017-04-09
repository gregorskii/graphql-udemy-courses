# Jasmine Config

To use Jasmine with this repo move some files around:

* test/unit/spec/jasmine/run.js -> test/unit/spec/run.js
* test/unit/spec/jasmine/support -> test/unit/spec/support
* test/unit/spec/jasmine/helpers -> test/unit/spec/helpers
* test/unit/spec/jasmine/wallaby.js -> PROJECT_ROOT/wallaby.js

# Install

Install required packages:

```
npm install eslint-plugin-jasmine jasmine jasmine-enzyme babel-cli --save-dev
```

Uninstall Mocha packages:

```
npm uninstall mocha eslint-plugin-mocha chai chai-enzyme --save-dev
```

Update `npm run test`:

```
"scripts": {
  "test": "NODE_ENV=test babel-node test/unit/spec/run.js"
},
```

NOTE: `storybook-addon-specifications` is configured to work with Jasmine.

Remove:

```

```

## Specs

Update Spec files to use [enzyme-jasmine](https://github.com/blainekasten/enzyme-matchers/tree/master/packages/jasmine-enzyme) config:

```
/* eslint-disable func-names, prefer-arrow-callback */

import React from 'react';
import { shallow } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';

import Welcome from 'components/welcome';

// Use describe to group similar tests
describe('Welcome', function() {
  beforeAll(function() {
    jasmineEnzyme();
  });

  // Use 'it' to test a single attribute of a target
  it('should show the correct text', function() {
    // Use expect to make an assertion about a target
    const wrapper = shallow(<Welcome />);

    expect(wrapper.find('div')).toHaveText('Welcome!');
  });
});
```

## Assertions

Update assertions per [enzyme-matchers](https://github.com/blainekasten/enzyme-matchers).

## Eslint

Update the `.eslintrc.yml` to add additional env, plugins, and extend from below:

```
env:
  browser: true
  jasmine: true
plugins:
  - jasmine
  - react
extends:
  - 'airbnb'
  - 'plugin:jasmine/recommended'

```
