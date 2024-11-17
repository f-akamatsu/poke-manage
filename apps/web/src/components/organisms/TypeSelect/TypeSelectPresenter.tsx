import { Box, Flex, Text } from '@chakra-ui/react';
import { Select } from 'chakra-react-select';
import { TypeIcon } from '../TypeIcon';

export interface TypeSelectOptions {
  label: string;
  value: string;
}

export interface TypeSelectPresenterProps {
  value: TypeSelectOptions | null | undefined;
  onChange: (newValue: TypeSelectOptions | null | undefined) => void;
  options: TypeSelectOptions[];
  isInvalid: boolean;
}

export function TypeSelectPresenter({
  value,
  onChange,
  options,
  isInvalid,
}: TypeSelectPresenterProps) {
  return (
    <Box w='220px'>
      <Select
        options={options}
        formatOptionLabel={formatOptionLabel}
        useBasicStyles
        placeholder='-'
        isClearable
        menuPlacement='auto'
        value={value}
        onChange={onChange}
        isInvalid={isInvalid}
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
