import { Flex } from '@chakra-ui/react';
import { Type } from '@packages/common-enum';
import { Meta, StoryObj } from '@storybook/react';
import { TypeIcon } from './TypeIcon';

const meta: Meta<typeof TypeIcon> = {
  component: TypeIcon,
};

export default meta;
type Story = StoryObj<typeof TypeIcon>;

export const AllTypes: Story = () => {
  return (
    <Flex gap={4} wrap='wrap'>
      {Type.values.map((type) => (
        <TypeIcon typeId={type.id} key={type.id} />
      ))}
    </Flex>
  );
};

AllTypes.args = {};
