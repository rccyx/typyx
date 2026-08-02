import rollupPluginReplace from '@rollup/plugin-replace';
import rollupPluginTypescript from '@rollup/plugin-typescript';
import path from 'node:path';
import type { Plugin, RollupOptions } from 'rollup';
import rollupPluginAutoExternal from 'rollup-plugin-auto-external';
import rollupPluginDts from 'rollup-plugin-dts';

const common: RollupOptions = {
  input: 'src/index.ts',
  external: [],
  treeshake: {
    annotations: true,
    moduleSideEffects: false,
    propertyReadSideEffects: false,
    unknownGlobalSideEffects: false,
  },
};

const runtimes: RollupOptions = {
  ...common,
  output: [
    {
      file: 'dist/index.mjs',
      format: 'esm',
      sourcemap: false,
    },
    {
      file: 'dist/index.cjs',
      format: 'cjs',
      sourcemap: false,
    },
  ],
  plugins: [
    rollupPluginAutoExternal(),
    rollupPluginTypescript({
      tsconfig: './tsconfig.json',
      include: ['src/**/*.ts'],
      noEmitOnError: true,
      sourceMap: false,
      declaration: false,
      declarationMap: false,
    }),
    rollupPluginReplace({
      values: {
        'import.meta.vitest': 'undefined',
      },
      preventAssignment: true,
    }),
  ],
};

const types: RollupOptions = {
  input: 'src/index.ts',
  output: {
    file: path.resolve('dist', 'index.d.ts'),
    format: 'esm',
  },
  plugins: [
    rollupPluginDts({
      tsconfig: './tsconfig.json',
      respectExternal: true,
    }),
  ] as Plugin[],
};

export default [runtimes, types];
