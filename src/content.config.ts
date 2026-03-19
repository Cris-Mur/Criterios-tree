import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const products = defineCollection({
	// Usamos glob loader para cargar archivos Markdown de la carpeta products
	loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/products" }),
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		price: z.number().optional(),
		category: z.enum(['Repostería', 'Chocolates', 'Gomas', 'Aromáticas', 'Especiales']),
		luxury_score: z.number().min(0).max(10).default(5),
		image: image(),
		isFeatured: z.boolean().default(false),
		draft: z.boolean().default(false),
	}),
});

export const collections = {
	'products': products,
};
