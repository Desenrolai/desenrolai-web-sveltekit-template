import globals from 'globals';
import sveltePlugin from 'eslint-plugin-svelte';
import svelteParser from 'svelte-eslint-parser';
import tsParser from '@typescript-eslint/parser';

/** @type {import('eslint').Linter.Config[]} */
export default [
	...sveltePlugin.configs['flat/recommended'],
	{
		files: ['**/*.svelte'],
		languageOptions: {
			parser: svelteParser,
			parserOptions: {
				parser: tsParser
			},
			globals: {
				...globals.browser
			}
		}
	},
	{
		files: ['**/*.ts'],
		languageOptions: {
			parser: tsParser,
			globals: {
				...globals.browser,
				...globals.node
			}
		}
	},
	{
		ignores: ['.svelte-kit/**', 'build/**', 'node_modules/**']
	}
];
