import babel from '@rollup/plugin-babel'
import external from 'rollup-plugin-peer-deps-external'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import commonjs from '@rollup/plugin-commonjs'
import pkg from './package.json'

export default {
  input: 'src',
  output: [
    { file: pkg.module, format: 'esm', sourcemap: true },
    { file: 'build/bundle.min.js', format: 'iife', name: 'bundle' },
  ],
  plugins: [
    nodeResolve(),
    external(),
    babel({
      rootMode: 'upward-optional',
      exclude: 'node_modules/**',
    }),
    commonjs({
      ignoreGlobal: true,
      include: 'node_modules/**',
      namedExports: {
        'node_modules/react/index.js': [
          'cloneElement',
          'createContext',
          'Component',
          'createElement',
        ],
        'node_modules/react-dom/index.js': ['render', 'hydrate'],
        'node_modules/react-is/index.js': [
          'isElement',
          'isValidElementType',
          'ForwardRef',
        ],
      },
    }),
    terser(),
  ],
  external: Object.keys(pkg.peerDependencies || {}),
}
