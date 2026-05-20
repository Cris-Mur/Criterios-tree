import { animations } from "@utils/animations";
import { gsap } from "gsap";

/**
 * Orquestación de animaciones cinemáticas del Hero.
 * Incluye un estado 'idle' (moneda girando) y una transición al scroll.
 */
export const initHero = () => {
	const hero = document.querySelector(".js-hero-container") as HTMLElement;
	const heroBg = document.querySelector(".js-hero-bg") as HTMLElement;
	const logoContainer = document.querySelector(".js-hero-logo-container") as HTMLElement;
	const logoImg = document.querySelector(".hero-logo-wrapper img") as HTMLElement;

	const textElements = [".js-hero-title", ".js-hero-subtitle", ".js-hero-actions"];

	if (hero && heroBg && logoContainer && logoImg) {
		const isMobile = window.innerWidth <= 768;

		/** 1. Animación Idle: Giro de moneda constante en el eje Y */
		const idleRotation = gsap.to(logoImg, {
			rotationY: 360,
			duration: 4,
			repeat: -1,
			ease: "none"
		});

		/** 2. Efecto de Brillo "Radioactivo": Simula aura dorada */
		const radioactiveGlow = gsap.fromTo(
			logoImg,
			{ filter: "drop-shadow(0 0 10px rgba(212, 175, 55, 0.5))" },
			{
				filter: "drop-shadow(0 0 45px rgba(212, 175, 55, 0.9))",
				duration: 2,
				repeat: -1,
				yoyo: true,
				ease: "sine.inOut"
			}
		);

		// ESTADO INICIAL (Pre-scroll)
		gsap.set(logoContainer, {
			opacity: 0.4,
			y: "30dvh",
			x: isMobile ? "0vw" : "-25vw",
			scale: 0.8
		});

		gsap.set(heroBg, {
			filter: "blur(5px)",
			scale: 2,
			yPercent: isMobile ? 2 : 10
		});

		/** 3. Timeline de Scroll: Sincroniza el alejamiento del logo con el fondo */
		const tl = animations.createScrollTimeline(hero, {
			scrollTrigger: {
				onUpdate: (self) => {
					// Pausamos las animaciones idle cuando el usuario empieza a bajar
					if (self.progress > 0.02) {
						idleRotation.pause();
						radioactiveGlow.pause();
					} else {
						idleRotation.play();
						radioactiveGlow.play();
					}
				}
			}
		});

		/** 4. Animación del Fondo: Efecto de zoom out asimétrico */
		tl.to(
			heroBg,
			{
				filter: "blur(0px)",
				scale: isMobile ? 1.4 : 1.15,
				xPercent: isMobile ? 0 : -5,
				yPercent: 0,
				ease: "none",
				duration: 1
			},
			0
		);

		/** 5. Secuencia del Logo: Centrado y escalado majestuoso */
		tl.to(
			logoContainer,
			{
				y: "0dvh",
				x: "0vw",
				scale: isMobile ? 1.2 : 1.4,
				opacity: 1,
				duration: 1
			},
			0
		);

		/** 6. Estabilización: Detenemos el giro en una posición limpia */
		tl.to(
			logoImg,
			{
				rotationY: 0,
				filter: "drop-shadow(0 0 35px rgba(212, 175, 55, 1))",
				duration: 0.5,
				ease: "power2.out"
			},
			0
		);

		/** 7. Revelación de textos en cascada (Stagger) */
		tl.to(
			textElements,
			{
				opacity: 1,
				y: 0,
				stagger: 0.15,
				duration: 0.6
			},
			"-=0.4"
		);
	}
};

// Auto-initialize if in browser
if (typeof window !== 'undefined') {
	initHero();
}
