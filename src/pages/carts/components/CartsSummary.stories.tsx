import type { Meta, StoryFn } from '@storybook/react';
import CartsSummary from './CartsSummary';

export default {
  title: 'Components/Carts/CartsSummary',
  component: CartsSummary,
  tags: ['autodocs'],
} as Meta<typeof CartsSummary>;

const Template: StoryFn<typeof CartsSummary> = (args) => (
  <CartsSummary {...args} />
);

export const Default = Template.bind({});
Default.args = {
  totalQuantity: 0,
  totalPrice: 0,
};

export const WithItems = Template.bind({});
WithItems.args = {
  totalQuantity: 5,
  totalPrice: 15000,
};
