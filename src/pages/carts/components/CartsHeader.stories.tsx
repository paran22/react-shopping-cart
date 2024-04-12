import type { Meta, StoryFn } from '@storybook/react';
import CartsHeader from './CartsHeader';

export default {
  title: 'Components/Carts/CartsHeader',
  component: CartsHeader,
  tags: ['autodocs'],
} as Meta<typeof CartsHeader>;

const Template: StoryFn<typeof CartsHeader> = (args) => (
  <CartsHeader {...args} />
);

export const Default = Template.bind({});
Default.args = {
  selectedItemQuantity: 0,
};

export const WithItems = Template.bind({});
WithItems.args = {
  selectedItemQuantity: 5,
};
