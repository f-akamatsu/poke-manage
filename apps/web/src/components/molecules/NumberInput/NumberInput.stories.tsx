import { Meta, StoryObj } from '@storybook/react';
import { NumberInput, NumberInputProps } from './NumberInput';

const meta: Meta<typeof NumberInput> = {
  component: NumberInput,
};
export default meta;

type Story = StoryObj<typeof NumberInput>;

export const Default: Story = (args: NumberInputProps) => {
  return <NumberInput {...args} />;
};
Default.storyName = 'default';
Default.args = { label: 'こうげき' };

export const Error: Story = (args: NumberInputProps) => {
  return <NumberInput {...args} />;
};
Error.storyName = 'error';
Error.args = { label: 'HP', errorMessage: '入力してください' };
