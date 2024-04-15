import type { Meta } from '@storybook/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { http } from 'msw';
import { useEffect } from 'react';
import mockDb from '../../../db.json';
import { queryClient } from '../../main';
import ProductsPage from './ProductsPage';

export default {
  title: 'Pages/ProductsPage',
  component: ProductsPage,
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
} as Meta<typeof ProductsPage>;

export const SuccessBehavior = () => <ProductsPage />;
SuccessBehavior.parameters = {
  msw: {
    handlers: [
      http.get(`${import.meta.env.VITE_BASE_URL}/products`, async () => {
        return Response.json({
          data: mockDb.products,
        });
      }),
    ],
  },
};

export const FailureBehavior = () => <ProductsPage />;
FailureBehavior.parameters = {
  msw: {
    handlers: [
      http.get(`${import.meta.env.VITE_BASE_URL}/products`, async () => {
        return new Response('Internal Server Error', { status: 500 });
      }),
    ],
  },
};
