import { Box, Flex, Text } from '@chakra-ui/react';
import { Select } from 'chakra-react-select';
import { TypeIcon } from '../TypeIcon/TypeIcon';

export interface TypeSelectPresenterProps {
  value: string;
  onChange: (newValue: string) => void;
  options: { label: string; value: string }[];
}

export function TypeSelectPresenter({ value, onChange, options }: TypeSelectPresenterProps) {
  return (
    <Box w='220px'>
      <Select
        options={options}
        formatOptionLabel={formatOptionLabel}
        useBasicStyles
        placeholder='-'
        isClearable
        menuPlacement='auto'
      />
    </Box>
  );
}

function formatOptionLabel(option: { label: string; value: string }) {
  return (
    <Flex gap={2} alignItems='center'>
      <TypeIcon typeId={option.value} />
      <Text fontSize='small'>{option.label}</Text>
    </Flex>
  );
}
