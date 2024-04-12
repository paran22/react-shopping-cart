import type { Meta, StoryFn } from '@storybook/react';
import CartsAllSelector from './CartsAllSelector';
import { fn } from '@storybook/test';

export default {
  title: 'Components/Carts/CartsAllSelector',
  component: CartsAllSelector,
  tags: ['autodocs'],
  args: {
    selectAll: fn(),
  },
} as Meta<typeof CartsAllSelector>;

const Template: StoryFn<typeof CartsAllSelector> = (args) => (
  <CartsAllSelector {...args} />
);

export const Default = Template.bind({});
Default.args = {
  isSelectedAll: false,
};

export const SelectedAll = Template.bind({});
SelectedAll.args = {
  isSelectedAll: true,
};
