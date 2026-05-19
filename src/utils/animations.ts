import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Opciones para la creación de un timeline de scroll.
 */
export interface ScrollTimelineOptions {
	/** Punto de inicio de la animación (ej: "top top"). */
	start?: string;
	/** Punto de fin de la animación (ej: "bottom bottom"). */
	end?: string;
	/** Valor de suavizado del scroll. Por defecto: 1. */
	scrub?: number | boolean;
	/** Si el elemento debe fijarse (pin) durante la animación. */
	pin?: boolean;
	/** Muestra marcadores de depuración si es true. */
	debug?: boolean;
	/** Configuración adicional directa para ScrollTrigger. */
	scrollTrigger?: Partial<ScrollTrigger.StaticVars>;
}

/**
 * Opciones para la animación de revelación (reveal).
 */
export interface RevealOptions {
	/** Desplazamiento en el eje Y. Por defecto: 30. */
	y?: number;
	/** Duración de la animación en segundos. Por defecto: 1. */
	duration?: number;
	/** Retraso entre elementos si se pasa un array (stagger). */
	stagger?: number;
	/** Configuración adicional directa para ScrollTrigger. */
	scrollTrigger?: Partial<ScrollTrigger.StaticVars>;
}

/**
 * Criterios Animation Engine (CAE)
 * Capa de abstracción sobre GSAP para mantener coherencia visual y técnica en el sitio.
 * Centraliza la configuración de plugins y comportamientos por defecto.
 */
class AnimationEngine {
	private static instance: AnimationEngine;
	public gsap = gsap;

	private constructor() {
		// Solo registramos el plugin si estamos en el cliente (navegador)
		if (typeof window !== "undefined") {
			this.gsap.registerPlugin(ScrollTrigger);
			this.initDefaults();
		}
	}

	/**
	 * Retorna la instancia única del motor de animaciones (Singleton).
	 */
	public static getInstance(): AnimationEngine {
		if (!AnimationEngine.instance) {
			AnimationEngine.instance = new AnimationEngine();
		}
		return AnimationEngine.instance;
	}

	/**
	 * Configura los valores por defecto para todas las animaciones de GSAP.
	 */
	private initDefaults(): void {
		this.gsap.defaults({
			ease: "power2.out",
			duration: 0.8
		});
	}

	/**
	 * Crea un Timeline de GSAP vinculado al scroll del usuario.
	 *
	 * @param trigger - Elemento o selector que activa la animación.
	 * @param options - Configuración de scroll y visualización.
	 * @returns Una instancia de GSAP Timeline.
	 */
	public createScrollTimeline(
		trigger: string | HTMLElement,
		options: ScrollTimelineOptions = {}
	): gsap.core.Timeline {
		return this.gsap.timeline({
			scrollTrigger: {
				trigger: trigger,
				start: options.start ?? "top top",
				end: options.end ?? "bottom bottom",
				scrub: options.scrub !== undefined ? options.scrub : 1,
				pin: options.pin ?? false,
				markers: options.debug ?? false,
				...options.scrollTrigger
			}
		});
	}

	/**
	 * Aplica una animación de revelación (fade-in + slide) a uno o varios elementos.
	 * Los elementos se animan individualmente cuando entran en el viewport.
	 *
	 * @param selector - Selector CSS, elemento HTMLElement o array de elementos.
	 * @param options - Configuración de la animación y del scroll.
	 */
	public reveal(
		selector: string | HTMLElement | HTMLElement[],
		options: RevealOptions = {}
	): void {
		if (typeof window === "undefined") return;

		const elements: HTMLElement[] =
			typeof selector === "string"
				? gsap.utils.toArray<HTMLElement>(selector)
				: Array.isArray(selector)
					? selector
					: [selector];

		if (elements.length === 0) return;

		elements.forEach((el, index) => {
			this.gsap.from(el, {
				opacity: 0,
				y: options.y ?? 30,
				duration: options.duration ?? 1,
				delay: options.stagger ? index * options.stagger : 0,
				scrollTrigger: {
					trigger: el,
					start: "top 90%",
					toggleActions: "play none none none",
					once: true,
					...options.scrollTrigger
				}
			});
		});
	}
}

/** Instancia exportada para uso global en el proyecto. */
export const animations = AnimationEngine.getInstance();
