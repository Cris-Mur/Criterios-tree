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
	 * Animación de revelación estándar.
	 */
	public reveal(element: string | HTMLElement, options: any = {}) {
		return this.gsap.from(element, {
			opacity: 0,
			y: options.y || 30,
			duration: options.duration || 1,
			stagger: options.stagger || 0.2,
			scrollTrigger: {
				trigger: element,
				start: "top 85%",
				...options.scrollTrigger
			}
		});
	}
}

export const animations = AnimationEngine.getInstance();
