import { Meta, StoryObj } from '@storybook/react';
import { TypeIcon, TypeIconProps } from './TypeIcon';
import { Type } from '@packages/common-enum';
import { Flex } from '@chakra-ui/react';

const meta: Meta<typeof TypeIcon> = {
  component: TypeIcon,
};

export default meta;
type Story = StoryObj<typeof TypeIcon>;

export const AllTypes: Story = (args: {}) => {
  return (
    <Flex gap={4} wrap='wrap'>
      {Type.values.map((type) => (
        <TypeIcon typeId={type.id} />
      ))}
    </Flex>
  );
};

AllTypes.args = {};
