module.exports = {
	env: {
		browser: true,
		node: true,
		es2021: true
	},
	plugins: ['prettier'],
	extends: [
		'prettier',
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:prettier/recommended'
	],
	settings: {
		react: {
			version: 'defect'
		}
	},
	parserOptions: {
		parser: 'babel-eslint',
		ecmaVersion: 12,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true
		}
	},
	rules: {
		'no-console': 1,
		'prettier/prettier': [
			2,
			{
				arrowParens: 'always',
				bracketSpacing: true,
				embeddedLanguageFormatting: 'auto',
				htmlWhitespaceSensitivity: 'css',
				insertPragma: false,
				jsxBracketSameLine: true,
				jsxSingleQuote: false,
				printWidth: 80,
				proseWrap: 'preserve',
				quoteProps: 'as-needed',
				requirePragma: false,
				semi: true,
				singleQuote: true,
				trailingComma: 'none',
				useTabs: true,
				vueIndentScriptAndStyle: false
			}
		],
		'react/prop-types': 'off'
	}
};
