import {
  storiesOf,
  action,
  linkTo,
  specs,
  describe,
  it,
  after,
  before,
  beforeEach,
  afterEach
} from 'projectBase/.storybook/facade';

import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';

chai.use(chaiEnzyme());

global.chai = chai;
global.storiesOf = storiesOf;
global.action = action;
global.linkTo = linkTo;
global.specs = specs;
global.describe = describe;
global.it = it;
global.after = after;
global.before = before;
global.beforeEach = beforeEach;
global.afterEach = afterEach;
global.expect = expect;
