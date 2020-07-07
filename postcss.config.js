import cssnano from 'cssnano'
import postcssImport from 'postcss-import'
import postcssPresetEnv from 'postcss-preset-env'
import postcssPurgecss from '@fullhuman/postcss-purgecss'

const mode = process.env.NODE_ENV
const dev = mode === 'development'

export default {
	plugins: [
		postcssImport,
		postcssPresetEnv({
			'color-mod-function': true,
			'nesting-rules': true,
		}),
		!dev &&
			postcssPurgecss({
				content: ['./src/**/*.svelte', './src/**/*.html'],
				defaultExtractor: (content) =>
					[...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(([_match, group, ..._rest]) => group),
			}),
		!dev && cssnano({ preset: ['default', { discardComments: { removeAll: true } }] }),
	].filter(Boolean),
}
