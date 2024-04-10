import type { Meta, StoryFn } from '@storybook/react';
import CheckBox from './CheckBox';

export default {
  title: 'UI/CheckBox',
  component: CheckBox,
  tags: ['autodocs'],
} as Meta<typeof CheckBox>;

const Template: StoryFn<typeof CheckBox> = (args) => <CheckBox {...args} />;

export const Default = Template.bind({});
Default.args = {};
