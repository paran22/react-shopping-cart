import type { Meta, StoryFn } from '@storybook/react';

import PageTitle from './PageTitle';

export default {
  title: 'Layout/PageTitle',
  component: PageTitle,
  tags: ['autodocs'],
} as Meta<typeof PageTitle>;

const Template: StoryFn<typeof PageTitle> = (args) => <PageTitle {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: '기본 제목',
};
