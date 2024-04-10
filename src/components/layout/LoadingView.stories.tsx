import type { Meta, StoryFn } from '@storybook/react';
import LoadingView from './LoadingView';

export default {
  title: 'Layout/LoadingView',
  component: LoadingView,
  tags: ['autodocs'],
} as Meta<typeof LoadingView>;

const Template: StoryFn<typeof LoadingView> = () => <LoadingView />;

export const Default = Template.bind({});
Default.args = {};
