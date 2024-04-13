import type { Meta, StoryFn } from '@storybook/react';
import OrdersPage from './OrdersPage';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '../../main';

export default {
  title: 'Pages/OrdersPage',
  component: OrdersPage,
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    ),
  ],
} as Meta<typeof OrdersPage>;

const Template: StoryFn<typeof OrdersPage> = () => <OrdersPage />;

export const Default = Template.bind({});
Default.args = {};
