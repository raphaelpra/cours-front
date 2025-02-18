// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Mines Frontend',
			social: {
				github: 'https://github.com/raphaelpra/cours-front',
			},
			sidebar: [
				{
					label: 'Cours',
					autogenerate: { directory: 'cours' },
				},
				{
					label: 'Exercices',
					autogenerate: { directory: 'exercices' },
				},
			],
		}),
	],
});
