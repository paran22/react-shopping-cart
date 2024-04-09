import type { Meta, StoryFn } from '@storybook/react';
import NavItem from './NavItem';

export default {
  title: 'Layout/NavItem',
  component: NavItem,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: '#2ac1bc' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof NavItem>;

const Template: StoryFn<typeof NavItem> = (args) => <NavItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  to: '/carts',
  label: '장바구니',
};
