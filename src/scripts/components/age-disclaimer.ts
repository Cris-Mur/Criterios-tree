export const initAgeDisclaimer = () => {
	const STORAGE_KEY = "criterios-age-verified";
	const disclaimer = document.getElementById("age-disclaimer");
	const acceptBtn = document.getElementById("btn-accept-age");

	if (!disclaimer) return;

	// Verificamos si ya está validado de forma persistente
	const isVerified = localStorage.getItem(STORAGE_KEY) === "true";
	if (isVerified) {
		disclaimer.style.display = "none";
		return;
	}

	// Bloqueamos el scroll del body
	document.body.classList.add("no-scroll");

	// Activamos la animación de entrada
	requestAnimationFrame(() => {
		disclaimer.classList.add("age-disclaimer--visible");
	});

	// Evento al aceptar
	acceptBtn?.addEventListener("click", () => {
		localStorage.setItem(STORAGE_KEY, "true");
		disclaimer.classList.remove("age-disclaimer--visible");
		document.body.classList.remove("no-scroll");

		// Esperamos que termine la transición CSS de 0.5s para ocultar el nodo
		setTimeout(() => {
			disclaimer.style.display = "none";
		}, 500);
	});
};

// Soporte para carga normal y navegación SPA de Astro (View Transitions / Swaps)
if (typeof document !== 'undefined') {
	document.addEventListener("DOMContentLoaded", initAgeDisclaimer);
	document.addEventListener("astro:after-swap", initAgeDisclaimer);
}
