import { defineConfig } from 'rollup'
import {} from 'path'
import vue from 'rollup-plugin-vue'
import extensions from 'rollup-plugin-extensions'
import typescript from 'rollup-plugin-typescript2'
import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'


export default defineConfig({
  input: 'src/index.js',
  plugins: [
    nodeResolve(),
    commonjs(),
    typescript(),
    extensions({ extensions: ['.js', '.ts'], resolveIndex: true }),
    vue()
  ]
})