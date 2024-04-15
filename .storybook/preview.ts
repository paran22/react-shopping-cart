import type { Preview } from '@storybook/react';
import { initialize, mswDecorator, mswLoader } from 'msw-storybook-addon';
import { withRouter } from 'storybook-addon-remix-react-router';
import '../src/styles/index.css';

initialize();

const preview: Preview = {
  decorators: [withRouter, mswDecorator],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    actions: { argTypesRegex: '^on.*' },
    loaders: [mswLoader],
  },
};

export default preview;
