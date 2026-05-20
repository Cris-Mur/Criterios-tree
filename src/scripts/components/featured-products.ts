import { animations } from "@utils/animations";

export const initFeaturedProducts = () => {
	/** Animamos la aparición de las tarjetas en cascada al entrar en el viewport */
	animations.reveal(".js-product-item", {
		stagger: 0.2,
		y: 50,
		scrollTrigger: {
			trigger: ".js-featured-grid",
			start: "top 80%"
		}
	});

	/** Animamos los textos de cabecera y pie con un retraso secuencial */
	animations.reveal(".js-reveal", {
		y: 20,
		stagger: 0.3
	});
};

if (typeof window !== 'undefined') {
	initFeaturedProducts();
}
