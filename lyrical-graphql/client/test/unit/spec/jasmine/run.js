import Jasmine from 'jasmine';
import 'test/unit/spec/helpers';

const jasmine = new Jasmine();

jasmine.loadConfigFile('test/unit/spec/support/jasmine.json');
jasmine.execute();
