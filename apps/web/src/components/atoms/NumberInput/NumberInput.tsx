import { FormControl, FormErrorMessage, FormLabel, Input, InputProps } from '@chakra-ui/react';
import { forwardRef } from 'react';

export interface NumberInputProps extends InputProps {
  label: string;
  errorMessage?: string;
}

const NumberInput = forwardRef(function NumberInput(props: NumberInputProps, ref) {
  return (
    <FormControl isInvalid={props.errorMessage !== undefined} w='80px'>
      <FormLabel fontSize='xs' textAlign='center' marginInlineEnd={0} marginBottom={1}>
        {props.label}
      </FormLabel>
      <Input
        {...props}
        type='number'
        textAlign='right'
        ref={ref}
        {...(props.isReadOnly && { bgColor: 'gray.50', cursor: 'default' })}
      />
      {props.errorMessage !== undefined && (
        <FormErrorMessage fontSize='xs'>{props.errorMessage}</FormErrorMessage>
      )}
    </FormControl>
  );
});

export default NumberInput;
