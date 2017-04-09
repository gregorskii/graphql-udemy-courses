import React from 'react';
import { storiesOf } from '@kadira/storybook';
// import { withKnobs, text } from '@kadira/storybook-addon-knobs';
import { Provider } from 'react-redux';

import store from 'src/store';
import Welcome from './index.jsx';

const stories = storiesOf('Welcome', module);

// stories.addDecorator(withKnobs);
stories.addDecorator(getStory => (
  <Provider store={store}>
    { getStory() }
  </Provider>
));

stories.add('Welcome', () => {
  // return <Welcome welcomeText={text('Text', 'Welcome to Storybook!')} />;
  return <Welcome welcomeText={'Welcome to Storybook!'} />;
});
