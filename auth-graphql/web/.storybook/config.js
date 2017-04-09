import { configure } from '@kadira/storybook';
import 'styles/base.global.scss';

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

function loadStories() {
  requireAll(require.context('../src', true, /-storybook\.jsx?$/));
}

configure(loadStories, module);
