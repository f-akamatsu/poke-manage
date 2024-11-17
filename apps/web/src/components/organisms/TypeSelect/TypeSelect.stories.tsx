import { Type } from '@packages/common-enum';
import { Meta, StoryObj } from '@storybook/react';
import { TypeSelectPresenter, TypeSelectPresenterProps } from './TypeSelectPresenter';

const meta: Meta<typeof TypeSelectPresenter> = {
  component: TypeSelectPresenter,
};

export default meta;
type Story = StoryObj<typeof TypeSelectPresenter>;

export const Default: Story = (args: TypeSelectPresenterProps) => {
  return <TypeSelectPresenter {...args} />;
};
Default.storyName = 'default';
Default.args = {
  options: Type.values.map((t) => {
    return { label: t.name, value: t.id };
  }),
};
