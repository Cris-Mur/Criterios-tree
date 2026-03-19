import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Criterios Animation Engine (CAE)
 * Capa de abstracción sobre GSAP para mantener coherencia visual y técnica.
 */
class AnimationEngine {
	private static instance: AnimationEngine;
	public gsap = gsap;

	private constructor() {
		if (typeof window !== 'undefined') {
			this.gsap.registerPlugin(ScrollTrigger);
			this.initDefaults();
		}
	}

	public static getInstance(): AnimationEngine {
		if (!AnimationEngine.instance) {
			AnimationEngine.instance = new AnimationEngine();
		}
		return AnimationEngine.instance;
	}

	private initDefaults() {
		this.gsap.defaults({
			ease: "power2.out",
			duration: 0.8
		});
	}

	/**
	 * Crea un Timeline vinculado al scroll.
	 */
	public createScrollTimeline(trigger: string | HTMLElement, options: any = {}) {
		return this.gsap.timeline({
			scrollTrigger: {
				trigger: trigger,
				start: options.start || "top top",
				end: options.end || "bottom bottom",
				scrub: options.scrub !== undefined ? options.scrub : 1,
				pin: options.pin || false,
				markers: options.debug || false,
				...options.scrollTrigger
			}
		});
	}

	/**
	 * Animación de revelación mejorada para uno o múltiples elementos.
	 */
	public reveal(selector: string | HTMLElement | HTMLElement[], options: any = {}) {
		if (typeof window === 'undefined') return;

		const elements = typeof selector === 'string' 
			? gsap.utils.toArray(selector) 
			: (Array.isArray(selector) ? selector : [selector]);

		if (!elements.length) return;

		// Si es una colección, aplicamos ScrollTrigger individualmente a cada elemento
		// para que cada uno se revele cuando entre en su propio punto de activación.
		elements.forEach((el: any, index: number) => {
			this.gsap.from(el, {
				opacity: 0,
				y: options.y || 30,
				duration: options.duration || 1,
				delay: options.stagger ? index * options.stagger : 0,
				scrollTrigger: {
					trigger: el,
					start: "top 90%", // Punto de activación más bajo para mejor visibilidad
					toggleActions: "play none none none",
					once: true, // Solo se anima una vez
					...options.scrollTrigger
				}
			});
		});
	}
}

export const animations = AnimationEngine.getInstance();
