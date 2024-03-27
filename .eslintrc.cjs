module.exports = {
	root: true,
	env: { browser: true, node: true, es6: true, jest: true },
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:prettier/recommended',
		'plugin:@typescript-eslint/recommended',
	],
	ignorePatterns: ['build', 'dist', 'public'],
	parser: '@typescript-eslint/parser',
	plugins: [
		'prettier',
		'react',
		'react-hooks',
		'@typescript-eslint',
		'@tanstack/eslint-plugin-query',
	],
	rules: {
		'prettier/prettier': ['error'],
		'react/react-in-jsx-scope': 'off',
	},
};
