// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Mines Frontend',
			social: {
				github: 'https://github.com/raphaelpra/cours-frontend',
			},
			sidebar: [
				{
					label: 'Cours',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Liste des cours', slug: 'cours/vite' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
