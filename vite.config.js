import { defineConfig } from 'vite'
import handlebars from 'vite-plugin-handlebars'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { resolve } from 'path'
import minify from 'vite-plugin-minify'

export default defineConfig({
	root: resolve(__dirname, 'src'),
	build: {
		minify: true,
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'src/index.html'),
			},
			output: {
				plugins: [minify({})],
				dir: resolve(__dirname, 'dist'),
			},
		},
	},
	plugins: [
		handlebars({
			context: {},
			partialDirectory: resolve(__dirname, './src/partials'),
		}),
		createSvgIconsPlugin({
			iconDirs: [resolve(process.cwd(), 'src/icons')],
			symbolId: '[name]',
			customDomId: '__svg__icons__dom__',
		}),
	],
})
