import coreWebVitals from 'eslint-config-next/core-web-vitals';
import typescriptConfig from 'eslint-config-next/typescript';

const eslintConfig = [
	...coreWebVitals,
	...typescriptConfig,
	{
		ignores: ['.next/**', 'node_modules/**', 'next-env.d.ts', 'cypress/**'],
	},
	{
		rules: {
			'@typescript-eslint/no-explicit-any': 'warn',
			'@typescript-eslint/ban-ts-comment': 'warn',
			'@typescript-eslint/no-require-imports': 'warn',
			'react-hooks/set-state-in-effect': 'warn',
		},
	},
];

export default eslintConfig;
