import type { Meta } from '@storybook/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { http } from 'msw';
import { useEffect } from 'react';
import mockDb from '../../../db.json';
import { queryClient } from '../../main';
import OrdersPage from './OrdersPage';

export default {
  title: 'Pages/OrdersPage',
  component: OrdersPage,
  decorators: [
    (Story) => {
      useEffect(() => {
        return () => window.location.reload();
      }, []);
      return (
        <QueryClientProvider client={queryClient}>
          <Story />
        </QueryClientProvider>
      );
    },
  ],
} as Meta<typeof OrdersPage>;

export const SuccessBehavior = () => <OrdersPage />;
SuccessBehavior.parameters = {
  msw: {
    handlers: [
      http.get(`${import.meta.env.VITE_BASE_URL}/orders`, async () => {
        return Response.json({
          data: mockDb.orders,
        });
      }),
    ],
  },
};

export const FailureBehavior = () => <OrdersPage />;
FailureBehavior.parameters = {
  msw: {
    handlers: [
      http.get(`${import.meta.env.VITE_BASE_URL}/orders`, async () => {
        return new Response('Internal Server Error', { status: 500 });
      }),
    ],
  },
};
