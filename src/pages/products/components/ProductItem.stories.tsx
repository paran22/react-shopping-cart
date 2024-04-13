import type { Meta, StoryFn } from '@storybook/react';
import ProductItem from './ProductItem';

export default {
  title: 'Components/Products/ProductItem',
  component: ProductItem,
  tags: ['autodocs'],
} as Meta<typeof ProductItem>;

const Template: StoryFn<typeof ProductItem> = (args) => (
  <ProductItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  data: {
    id: 1,
    name: '냉면용기(대)',
    price: 83700,
    imageUrl: 'https://cdn-mart.baemin.com/goods/2/1556008840639m0.jpg',
  },
};
