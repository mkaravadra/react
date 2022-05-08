module.exports = {
	env: {
		browser: true,
		node: true,
		es2021: true
	},
	plugins: ["prettier"],
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:prettier/recommended"
	],
	parserOptions: {
		ecmaVersion: 12,
		sourceType: "module",
		ecmaFeatures: {
			jsx: true
		}
	},
	rules: {
		"prettier/prettier": [
			"error",
			{
				arrowParens: "always",
				bracketSpacing: true,
				embeddedLanguageFormatting: "auto",
				htmlWhitespaceSensitivity: "css",
				insertPragma: false,
				jsxBracketSameLine: false,
				jsxSingleQuote: false,
				printWidth: 80,
				proseWrap: "preserve",
				quoteProps: "as-needed",
				requirePragma: false,
				semi: true,
				singleQuote: false,
				trailingComma: "none",
				useTabs: true,
				vueIndentScriptAndStyle: false
			}
		]
	}
};
