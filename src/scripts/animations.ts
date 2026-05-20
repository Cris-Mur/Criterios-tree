import { animations } from "@utils/animations";

/**
 * Standard page reveals for common CSS classes.
 */
export const initPageAnimations = () => {
	if (animations && typeof animations.reveal === "function") {
		// General reveals
		animations.reveal(".js-reveal", { stagger: 0.15 });
		
		// Specific section reveals
		animations.reveal(".js-wtb-reveal", { y: 20 });
	}
};

if (typeof window !== 'undefined') {
	document.addEventListener("DOMContentLoaded", initPageAnimations);
	document.addEventListener("astro:after-swap", initPageAnimations);
}
