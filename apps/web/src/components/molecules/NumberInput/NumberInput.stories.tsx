import { Meta, StoryObj } from '@storybook/react';
import NumberInput, { NumberInputProps } from './NumberInput';

const meta: Meta<typeof NumberInput> = {
  component: NumberInput,
};
export default meta;

type Story = StoryObj<typeof NumberInput>;

export const Basic: Story = (args: NumberInputProps) => {
  return <NumberInput {...args} />;
};
Basic.args = { label: 'こうげき' };

export const Error: Story = (args: NumberInputProps) => {
  return <NumberInput {...args} />;
};
Error.args = { label: 'HP', errorMessage: '入力してください' };
