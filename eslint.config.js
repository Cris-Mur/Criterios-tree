import eslintPluginAstro from "eslint-plugin-astro";
import tseslint from "typescript-eslint";
import jsxA11y from "eslint-plugin-jsx-a11y";

export default [
	// Reglas base
	...tseslint.configs.recommendedTypeChecked,
	...eslintPluginAstro.configs.recommended,
	...eslintPluginAstro.configs["jsx-a11y-recommended"],
	{
		files: ["**/*.{js,mjs,cjs,ts,astro}"],
		languageOptions: {
			parserOptions: {
				project: true,
				// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
				tsconfigRootDir: import.meta.dirname
			}
		},
		plugins: {
			"jsx-a11y": jsxA11y
		},
		rules: {
			// Personalizaciones estrictas
			"@typescript-eslint/no-explicit-any": "warn",
			"@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
			"astro/no-set-html-directive": "error"
		}
	},
	{
		files: ["src/components/ui/Icon.astro"],
		rules: {
			"astro/no-set-html-directive": "off"
		}
	},
	{
		ignores: ["dist/*", ".astro/*", "node_modules/*"]
	}
];
