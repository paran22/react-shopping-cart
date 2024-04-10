import type { Meta, StoryFn } from '@storybook/react';
import Header from './Header';

export default {
  title: 'Layout/Header',
  component: Header,
  tags: ['autodocs'],
} as Meta<typeof Header>;

const Template: StoryFn<typeof Header> = () => <Header />;

export const Default = Template.bind({});
Default.args = {};
