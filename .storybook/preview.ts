import type { Preview } from '@storybook/react';
import '../src/styles/index.css';
import { router } from '../src/router';
import { withRouter } from 'storybook-addon-remix-react-router';

const preview: Preview = {
  decorators: [withRouter],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    actions: { argTypesRegex: '^on.*' },
  },
};

export default preview;
