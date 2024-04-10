import type { Meta, StoryFn } from '@storybook/react';
import Logo from './Logo';

export default {
  title: 'Layout/Logo',
  component: Logo,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: '#2ac1bc' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Logo>;

const Template: StoryFn<typeof Logo> = () => <Logo />;

export const Default = Template.bind({});
Default.args = {};
