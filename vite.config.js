import { resolve } from 'path'
import { defineConfig } from 'vite'
import handlebars from 'vite-plugin-handlebars'

import data from './data.json'

const devRoot = (...path) => resolve(__dirname, 'src', ...(path ? path : []))
const buildRoot = (...path) => resolve(__dirname, 'dist', ...(path ? path : []))

export default defineConfig({
	base: '/myportfolio/',
	root: devRoot(),
	build: {
		minify: true,
		rollupOptions: {
			input: {
				main: devRoot('index.html'),
			},
			output: {
				dir: buildRoot(),
			},
		},
	},
	plugins: [
		handlebars({
			context: data,
			partialDirectory: devRoot('partials'),
		}),
	],
})
