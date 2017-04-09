import chai, { expect, assert } from 'chai';
import sinonChai from 'sinon-chai';
import chaiEnzyme from 'chai-enzyme';
import 'jsdom-global/register';


chai.use(chaiEnzyme());
chai.use(sinonChai);

global.chai = chai;
global.expect = expect;
global.assert = assert;
