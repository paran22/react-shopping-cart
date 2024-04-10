import type { Meta, StoryFn } from '@storybook/react';
import ErrorView from './ErrorView';

export default {
  title: 'Layout/ErrorView',
  component: ErrorView,
  tags: ['autodocs'],
} as Meta<typeof ErrorView>;

const Template: StoryFn<typeof ErrorView> = () => <ErrorView />;

export const Default = Template.bind({});
Default.args = {};
