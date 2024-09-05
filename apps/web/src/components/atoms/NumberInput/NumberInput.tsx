import { Input, InputProps } from '@chakra-ui/react';
import { forwardRef } from 'react';

const NumberInput = forwardRef(function NumberInput(props: InputProps, ref) {
  return (
    <Input
      {...props}
      type='number'
      textAlign='right'
      ref={ref}
      {...(props.isReadOnly && { bgColor: 'gray.50', cursor: 'default' })}
    />
  );
});

export default NumberInput;
