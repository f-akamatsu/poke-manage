import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Preview } from '@storybook/react';

const preview: Preview = {
  decorators: [
    (Story) => (
      <ChakraProvider>
        <Story />
      </ChakraProvider>
    ),
  ],
};

export default preview;
