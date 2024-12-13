import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Grid,
  GridItem,
  Input,
  InputProps,
} from '@chakra-ui/react';
import { forwardRef } from 'react';

export interface NumberInputProps extends InputProps {
  label: string;
  errorMessage?: string;
  width?: string;
  labelWidth?: string;
}

export const NumberInput = forwardRef(function NumberInput(props: NumberInputProps, ref) {
  const _width = props.width ?? '140px';
  const _labelWidth = props.labelWidth ?? '60px';
  const _errorMessage = props.errorMessage;
  const _rowSize = !!_errorMessage ? 2 : 1;

  return (
    <FormControl isInvalid={!!_errorMessage} w={_width}>
      <Grid templateRows={`repeat(${_rowSize}, auto)`} templateColumns={`${_labelWidth} 1fr`}>
        <GridItem display='flex' alignItems='center'>
          <FormLabel m={0} fontSize='xs'>
            {props.label}
          </FormLabel>
        </GridItem>
        <GridItem>
          <Input
            {...props}
            type='number'
            textAlign='right'
            ref={ref}
            {...(props.isReadOnly && { bgColor: 'gray.50', cursor: 'default' })}
          />
        </GridItem>
        <GridItem />
        <GridItem>
          {_errorMessage && (
            <FormErrorMessage fontSize='xs' mt={1}>
              {props.errorMessage}
            </FormErrorMessage>
          )}
        </GridItem>
      </Grid>
    </FormControl>
  );
});
