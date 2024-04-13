import type { Meta, StoryFn } from '@storybook/react';
import OrderProductItem from './OrderProductItem';

export default {
  title: 'Components/Orders/OrderProductItem',
  component: OrderProductItem,
  tags: ['autodocs'],
} as Meta<typeof OrderProductItem>;

const Template: StoryFn<typeof OrderProductItem> = (args) => (
  <OrderProductItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  data: {
    id: 1,
    name: '[리뉴얼]젓가락(종이)-정성을 담아',
    price: 21800,
    imageUrl:
      'https://cdn-mart.baemin.com/sellergoods/main/5297837f-5ecd-4945-be2f-4a75854cd06e.jpg',
    quantity: 5,
  },
};
