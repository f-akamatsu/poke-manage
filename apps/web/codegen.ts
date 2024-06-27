import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: '../bff/src/schema.gql',
  overwrite: true,
  documents: ['src/**/*.tsx'],
  generates: {
    './src/gql/__generated__/': {
      preset: 'client',
      presetConfig: {
        fragmentMasking: { unmaskFunctionName: 'getFragmentData' },
      },
    },
  },
};

export default config;
