import type { Meta, StoryFn } from '@storybook/react';
import CartView from './CartView';
import type { CartResponse } from '@api';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '../../../main';

export default {
  title: 'Components/Carts/CartView',
  component: CartView,
  tags: ['autodocs'],
} as Meta<typeof CartView>;

const Template: StoryFn<typeof CartView> = (args) => (
  <QueryClientProvider client={queryClient}>
    <CartView {...args} />
  </QueryClientProvider>
);

export const Default = Template.bind({});
Default.args = {
  data: [] as CartResponse[],
};

export const WithItems = Template.bind({});
WithItems.args = {
  data: [
    {
      id: 1,
      product: {
        id: 12,
        name: '[리뉴얼]젓가락(종이)-정성을 담아',
        price: 21800,
        imageUrl:
          'https://cdn-mart.baemin.com/sellergoods/main/5297837f-5ecd-4945-be2f-4a75854cd06e.jpg',
      },
      quantity: 2,
    },
    {
      id: 2,
      product: {
        id: 3,
        name: '펩시 콜라 355ml 24캔',
        price: 83700,
        imageUrl:
          'https://cdn-mart.baemin.com/sellergoods/main/84fc0238-0239-4d0e-870b-a9daa6f2c42c.jpg',
      },
      quantity: 1,
    },
  ] as CartResponse[],
};
