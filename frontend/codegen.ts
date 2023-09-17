
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://backend:3000/graphql",
  generates: {
    "./apollo/__generated__/client/": {
      preset: "client",
      plugins: []
    }
  }
};

export default config;
