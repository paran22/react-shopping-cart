import type { Meta } from '@storybook/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { useEffect } from 'react';
import mockDb from '../../../db.json';
import { queryClient } from '../../main';
import CartsPage from './CartsPage';
import { http } from 'msw';

export default {
  title: 'Pages/CartsPage',
  component: CartsPage,
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
} as Meta<typeof CartsPage>;

export const SuccessBehavior = () => <CartsPage />;
SuccessBehavior.parameters = {
  msw: {
    handlers: [
      http.get(`${import.meta.env.VITE_BASE_URL}/carts`, async () => {
        return Response.json({
          data: mockDb.carts,
        });
      }),
    ],
  },
};

export const FailureBehavior = () => <CartsPage />;
FailureBehavior.parameters = {
  msw: {
    handlers: [
      http.get(`${import.meta.env.VITE_BASE_URL}/carts`, async () => {
        return new Response('Internal Server Error', { status: 500 });
      }),
    ],
  },
};
