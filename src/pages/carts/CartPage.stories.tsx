import type { Meta, StoryFn } from '@storybook/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '../../main';
import CartsPage from './CartsPage';

export default {
  title: 'Pages/CartsPage',
  component: CartsPage,
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    ),
  ],
} as Meta<typeof CartsPage>;

const Template: StoryFn<typeof CartsPage> = () => <CartsPage />;

export const Default = Template.bind({});
