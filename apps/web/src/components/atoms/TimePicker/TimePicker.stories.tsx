import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { TimePicker, TimePickerProps } from './TimePicker';

const meta: Meta<typeof TimePicker> = {
  component: TimePicker,
};

export default meta;
type Story = StoryObj<typeof TimePicker>;

export const Default: Story = (args: TimePickerProps) => {
  const [value, setValue] = useState<string>('');
  return <TimePicker {...args} value={value} onChange={setValue} />;
};
Default.storyName = 'default';
Default.args = {};
