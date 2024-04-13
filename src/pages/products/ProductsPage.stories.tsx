import type { Meta, StoryFn } from '@storybook/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '../../main';
import ProductsPage from './ProductsPage';

export default {
  title: 'Pages/ProductsPage',
  component: ProductsPage,
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    ),
  ],
} as Meta<typeof ProductsPage>;

const Template: StoryFn<typeof ProductsPage> = () => <ProductsPage />;

export const Default = Template.bind({});
