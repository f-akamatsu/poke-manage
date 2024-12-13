import { ChakraProvider } from '@chakra-ui/react';
import { Preview } from '@storybook/react';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

const preview: Preview = {
  decorators: [
    (Story) => {
      const methods = useForm();
      return (
        <FormProvider {...methods}>
          <ChakraProvider>
            <Story />
          </ChakraProvider>
        </FormProvider>
      );
    },
  ],
};

export default preview;
