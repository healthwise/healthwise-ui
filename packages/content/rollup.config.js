import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'
import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'

export default {
  input: 'src/index.js',
  output: {
    name: 'HealthwiseUi',
    file: 'build/healthwise-ui.min.js',
    format: 'iife',
  },
  external: ['react', 'react-dom'],
  plugins: [
    nodeResolve(),
    babel({
      rootMode: 'upward',
      exclude: 'node_modules/**',
    }),
    commonjs({
      ignoreGlobal: true,
      include: 'node_modules/**',
      namedExports: {
        '@material-ui/core/styles/index.js': ['withStyles', 'createMuiTheme', 'MuiThemeProvider'],
        'react-is/index.js': ['isElement', 'isValidElementType', 'ForwardRef'],
      },
    }),
    terser(),
  ],
}
