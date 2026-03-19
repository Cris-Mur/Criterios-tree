import { z } from 'astro:content';

export const HeroSchema = z.object({
	title: z.string().min(5),
	subtitle: z.string().min(10),
	actions: z.object({
		primary: z.object({ label: z.string(), href: z.string() }),
		secondary: z.object({ label: z.string(), href: z.string() })
	})
});

export const StoreSchema = z.array(z.object({
	id: z.string(),
	name: z.string(),
	address: z.string(),
	mapLink: z.string().url(),
	hours: z.string(),
	isDigital: z.boolean(),
	phone: z.string()
}));

export const AboutSchema = z.object({
	hero: z.object({ title: z.string(), subtitle: z.string() }),
	history: z.object({ title: z.string(), text: z.string(), image: z.string() }),
	market: z.object({
		title: z.string(),
		stats: z.array(z.object({ label: z.string(), value: z.string() }))
	}),
	purpose: z.object({ title: z.string(), mission: z.string(), vision: z.string() }),
	timeline: z.array(z.object({ year: z.string(), event: z.string() }))
});
