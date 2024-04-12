import type { Meta, StoryFn } from '@storybook/react';
import { QueryClientProvider } from '@tanstack/react-query';
import type { Cart } from '@types';
import { queryClient } from '../../../main';
import CartList from './CartList';

export default {
  title: 'Components/Carts/CartList',
  component: CartList,
  tags: ['autodocs'],
} as Meta<typeof CartList>;

const Template: StoryFn<typeof CartList> = (args) => (
  <QueryClientProvider client={queryClient}>
    <CartList {...args} />
  </QueryClientProvider>
);

const sampleCarts: Cart[] = [
  {
    id: 1,
    product: {
      id: 34,
      name: '[리뉴얼]젓가락(종이)-정성을 담아',
      price: 21800,
      imageUrl:
        'https://cdn-mart.baemin.com/sellergoods/main/5297837f-5ecd-4945-be2f-4a75854cd06e.jpg',
    },
    quantity: 5,
    selected: true,
  },
  {
    id: 2,
    product: {
      id: 33,
      name: '젓가락(종이)-웬만해선 이 맛을 막을 수 없다',
      price: 21800,
      imageUrl:
        'https://cdn-mart.baemin.com/sellergoods/main/1b6e926b-52a3-4a92-8db5-fddaccdb2583.jpg',
    },
    quantity: 3,
    selected: false,
  },
];

export const Default = Template.bind({});
Default.args = {
  data: sampleCarts,
};
