import type { Preview } from '@storybook/react';
import '../src/styles/index.css';
import { router } from '../src/router';
import { withRouter } from 'storybook-addon-remix-react-router';
import { initialize, mswDecorator, mswLoader } from 'msw-storybook-addon';
import { handlers } from '../src/api/mocks/handlers';

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
