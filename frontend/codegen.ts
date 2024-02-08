import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://backend:4001',
  documents: ['src/graphql/**/*.queries.ts', 'src/graphql/**/*.mutations.ts'],
  generates: {
    './src/types/graphql.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
    },
  },
};

export default config;
