import type { Meta, StoryFn } from '@storybook/react';
import CartItem from './CartItem';

export default {
  title: 'Components/Carts/CartItem',
  component: CartItem,
  tags: ['autodocs'],
} as Meta<typeof CartItem>;

const Template: StoryFn<typeof CartItem> = (args) => <CartItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: {
    selected: false,
    id: 1,
    product: {
      id: 1,
      name: '[리뉴얼]젓가락(종이)-정성을 담아',
      price: 21800,
      imageUrl:
        'https://cdn-mart.baemin.com/sellergoods/main/5297837f-5ecd-4945-be2f-4a75854cd06e.jpg',
    },
    quantity: 1,
  },
};
