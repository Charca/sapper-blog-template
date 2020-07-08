import * as path from 'path'
import resolve from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import commonjs from '@rollup/plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import svelte from 'rollup-plugin-svelte'
import sveltePreprocess from 'svelte-preprocess'
import babel from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'

import marked from 'marked'

import config from 'sapper/config/rollup'
import pkg from './package.json'
import postcssConfig from './postcss.config.js'

const mode = process.env.NODE_ENV

const dev = mode === 'development'
const legacy = !!process.env.SAPPER_LEGACY_BUILD

const babelExt = ['.js', '.svelte']
const extensions = babelExt.concat(['.css'])
const onwarn = (warning, onwarn) =>
	(warning.code === 'CIRCULAR_DEPENDENCY' && /[/\\]@sapper[/\\]/.test(warning.message)) || onwarn(warning)

const markdown = () => ({
	transform(md, id) {
		if (!/\.md$/.test(id)) return null
		const data = marked(md)
		return { code: `export default ${JSON.stringify(data.toString())};` }
	},
})

export default {
	client: {
		input: config.client.input(),
		output: config.client.output(),
		plugins: [
			replace({ 'process.browser': true, 'process.env.NODE_ENV': JSON.stringify(mode) }),
			svelte({ dev, hydratable: true, preprocess: sveltePreprocess(postcssConfig), emitCss: true }),
			resolve({ browser: true, extensions, dedupe: ['svelte'] }),
			commonjs(),
			legacy &&
				babel({
					extensions: babelExt,
					babelHelpers: 'runtime',
					exclude: ['node_modules/@babel/**'],
					presets: [['@babel/preset-env', { targets: pkg.browserslist.toString() }]],
					plugins: ['@babel/plugin-syntax-dynamic-import', ['@babel/plugin-transform-runtime', { useESModules: true }]],
				}),
			!dev && terser({ module: true }),
		],
		preserveEntrySignatures: false,
		onwarn,
	},

	server: {
		input: config.server.input(),
		output: config.server.output(),
		plugins: [
			replace({ 'process.browser': false, 'process.env.NODE_ENV': JSON.stringify(mode) }),
			svelte({ generate: 'ssr', dev, preprocess: sveltePreprocess(postcssConfig) }),
			postcss({ minimize: true, extract: path.resolve(__dirname, './static/index.css') }),
			resolve({ extensions, dedupe: ['svelte'] }),
			commonjs(),
			markdown(),
		],
		external: Object.keys(pkg.dependencies).concat(
			require('module').builtinModules || Object.keys(process.binding('natives')),
		),
		preserveEntrySignatures: 'strict',
		onwarn,
	},

	serviceworker: {
		input: config.serviceworker.input(),
		output: config.serviceworker.output(),
		plugins: [
			resolve({ extensions }),
			replace({ 'process.browser': true, 'process.env.NODE_ENV': JSON.stringify(mode) }),
			commonjs(),
			!dev && terser(),
		],
		preserveEntrySignatures: false,
		onwarn,
	},
}
