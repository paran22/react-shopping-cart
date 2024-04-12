import type { Meta, StoryFn } from '@storybook/react';
import QuantitySelector from './QuantitySelector';

export default {
  title: 'Components/Carts/QuantitySelector',
  component: QuantitySelector,
  tags: ['autodocs'],
} as Meta<typeof QuantitySelector>;

const Template: StoryFn<typeof QuantitySelector> = (args) => (
  <QuantitySelector {...args} />
);

export const Default = Template.bind({});
Default.args = {
  value: 1,
  min: 1,
  max: 10,
};
