const path = require('path');

module.exports = {
	parser: '@typescript-eslint/parser',
	env: {
		node: true,
		es6: true,
	},
	settings: {
		'import/extensions': ['.ts'],
	},
	plugins: ['@typescript-eslint', 'import', 'filenames', 'jest'],
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:import/typescript',
		'prettier',
		'prettier/@typescript-eslint',
	],
	rules: {
		'@typescript-eslint/no-explicit-any': 2,
		'@typescript-eslint/no-unused-vars': ['error', {args: 'none'}],
		'@typescript-eslint/no-use-before-define': 0,
		'filenames/match-exported': [2, ['pascal', 'camel']],
		'import/newline-after-import': 2,
		'import/no-duplicates': 2,
		'import/order': [
			2,
			{'newlines-between': 'always', groups: ['external'], alphabetize: {order: 'asc', caseInsensitive: true}},
		],
		'import/named': 2,
		'graphql/template-strings': [
			'error',
			{
				env: 'relay',
				tagName: 'graphql',
				schemaJsonFilepath: path.resolve(__dirname, 'src/__generated__gatsby-introspection.json'),
			},
		],
	},
};
