/**
 * Control de estado del Header según el scroll.
 * Añade una clase para permitir cambios de opacidad o altura al desplazar.
 */
export const initHeaderScroll = () => {
	const header = document.querySelector(".header");
	if (!header) return;

	window.addEventListener(
		"scroll",
		() => {
			if (window.scrollY > 50) {
				header.classList.add("header--scrolled");
			} else {
				header.classList.remove("header--scrolled");
			}
		},
		{ passive: true }
	);
};

if (typeof window !== 'undefined') {
	initHeaderScroll();
}
