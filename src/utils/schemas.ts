import { z } from "astro/zod";

/**
 * Esquema para la sección Hero de la página de inicio.
 * Valida títulos, subtítulos y los enlaces de acción principales.
 */
export const HeroSchema = z.object({
	title: z.string().min(5, "El título del Hero debe tener al menos 5 caracteres"),
	subtitle: z.string().min(10, "El subtítulo del Hero debe tener al menos 10 caracteres"),
	actions: z.object({
		primary: z.object({
			label: z.string(),
			href: z.string()
		}),
		secondary: z.object({
			label: z.string(),
			href: z.string()
		})
	})
});

/**
 * Esquema para la definición de tiendas y puntos de venta.
 * Soporta tanto tiendas físicas como digitales.
 */
export const StoreSchema = z.array(
	z.object({
		/** Identificador único de la tienda. */
		id: z.string(),
		/** Nombre comercial del punto de venta. */
		name: z.string(),
		/** Dirección física o descripción de ubicación. */
		address: z.string(),
		/** Enlace a Google Maps o similar. */
		mapLink: z.string().url(),
		/** Horarios de atención. */
		hours: z.string(),
		/** Indica si es una tienda exclusivamente online. */
		isDigital: z.boolean(),
		/** Teléfono de contacto. */
		phone: z.string()
	})
);

/**
 * Esquema para la página 'Nosotros'.
 * Cubre historia, propósito, métricas de mercado y línea de tiempo evolutiva.
 */
export const AboutSchema = z.object({
	hero: z.object({
		title: z.string(),
		subtitle: z.string()
	}),
	history: z.object({
		title: z.string(),
		text: z.string(),
		image: z.string()
	}),
	market: z.object({
		title: z.string(),
		stats: z.array(
			z.object({
				label: z.string(),
				value: z.string()
			})
		)
	}),
	purpose: z.object({
		title: z.string(),
		missionTitle: z.string(),
		mission: z.string(),
		visionTitle: z.string(),
		vision: z.string()
	}),
	timelineTitle: z.string(),
	timeline: z.array(
		z.object({
			year: z.string(),
			event: z.string()
		})
	)
});

/**
 * Esquema para la configuración global del sitio (site.json).
 */
export const SiteSchema = z.object({
	global: z.object({
		siteName: z.string(),
		baseTitle: z.string(),
		defaultDescription: z.string(),
		ogImage: z.string(),
		contact: z.object({
			phone: z.string(),
			email: z.string().email(),
			instagram: z.string().url(),
			facebook: z.string().url()
		})
	}),
	seo: z.record(
		z.string(),
		z.object({
			title: z.string(),
			description: z.string()
		})
	)
});

/**
 * Esquema para la navegación y redes sociales (navigation.json).
 */
export const NavigationSchema = z.object({
	navigation: z.array(
		z.object({
			label: z.string(),
			href: z.string()
		})
	),
	socials: z.array(
		z.object({
			id: z.string(),
			name: z.string(),
			url: z.string().url()
		})
	),
	credits: z.object({
		brand: z.string(),
		slogan: z.string(),
		author: z.string(),
		authorUrl: z.string().url()
	})
});

/** Tipos derivados de los esquemas para uso en TypeScript. */
export type HeroData = z.infer<typeof HeroSchema>;
export type StoreData = z.infer<typeof StoreSchema>;
export type AboutData = z.infer<typeof AboutSchema>;
export type SiteData = z.infer<typeof SiteSchema>;
export type NavigationData = z.infer<typeof NavigationSchema>;
