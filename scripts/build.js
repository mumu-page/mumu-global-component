import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
// import postcss from 'rollup-plugin-postcss-modules'
import postcss from 'rollup-plugin-postcss'
import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'
import babel from '@rollup/plugin-babel'
import { getInputFile, getOutFile, isProduction, inputs, getClearDir } from './utils'
import RollupPluginPeerDepsExternal from 'rollup-plugin-peer-deps-external'
import upperFirst from "lodash.upperfirst";
import camelCase from "lodash.camelcase";
import clear from 'rollup-plugin-clear'
import path from 'path'
// import dts from 'rollup-plugin-dts'

export default inputs.map((file) => {
  const config = require(path.resolve(`packages/${file}/package.json`));
  const peerDependencies = file.peerDependencies || {}
  const name_kebabcase = config.name
  const version = config.version
  const name = upperFirst(camelCase(name_kebabcase))

  return {
    input: getInputFile(name, './index.tsx'),
    output: [
      {
        format: 'es',
        file: getOutFile('es', name_kebabcase, version),
        sourcemap: false,
      },
      {
        format: 'cjs',
        file: getOutFile('cjs', name_kebabcase, version),
        exports: 'named',
        sourcemap: false,
      },
      {
        file: getOutFile('umd', name_kebabcase, version),
        format: 'umd',
        sourcemap: false,
        name: name,
        globals: {
          immer: 'immer',
          lodash: 'lodash',
          react: 'React',
        },
      },
    ],
    plugins: [
      clear({
        targets: [
          getClearDir('build'),
        ],
      }),
      // dts(),
      RollupPluginPeerDepsExternal({ includeDependencies: !isProduction }),
      typescript(),
      resolve({
        preferBuiltins: false,
      }),
      commonjs({ sourceMap: !isProduction }),
      babel({
        babelHelpers: 'bundled',
        presets: ['@babel/preset-env'],
        exclude: '**/node_modules/**',
      }),
      json(),
      postcss({
        extract: `${name_kebabcase}_${version}.css`,
      }),
      isProduction && terser(),
    ],
    external: (id) => {
      const external = Object.keys(peerDependencies)
      return (
        external.includes(id) ||
        /^(react|rc|moment|monaco|@ant-design)/.test(id)
      )
    },
  }
})