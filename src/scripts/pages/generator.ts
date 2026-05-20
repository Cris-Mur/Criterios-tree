// Type definition for history tracking item
interface HistoryItem {
	id: string;
	label: string;
	date: string;
}

export const initGenerator = () => {
	// Capture admin UI labels for JS usage
	const adminDataEl = document.getElementById('admin-ui-data');
	const adminUI = adminDataEl ? JSON.parse(adminDataEl.textContent || '{}') : {};
	const { 
		copySuccess = "¡Copiado!", 
		deleteConfirm = "¿Estás seguro de que deseas eliminar todo el historial de códigos generados?", 
		deleteLabel = "Eliminar", 
		copyProd = "Copiar Producto", 
		copyClient = "Copiar Bitácora" 
	} = adminUI;

	// DOM Elements
	const lotInput = document.getElementById("lot-input") as HTMLInputElement | null;
	const generateBtn = document.getElementById("generate-btn") as HTMLButtonElement | null;
	const resultsArea = document.getElementById("results-area") as HTMLDivElement | null;
	const activeDescriptor = document.getElementById("active-descriptor") as HTMLSpanElement | null;
	const linkProducto = document.getElementById("link-producto") as HTMLInputElement | null;
	const linkCliente = document.getElementById("link-cliente") as HTMLInputElement | null;
	const historyTbody = document.getElementById("history-tbody") as HTMLTableSectionElement | null;
	const noHistory = document.getElementById("no-history") as HTMLDivElement | null;
	const clearAllBtn = document.getElementById("clear-all-btn") as HTMLButtonElement | null;

	// Helper: clean lot descriptor for alphanumeric ID compatibility
	function cleanLotDescriptor(str: string): string {
		if (!str) return "LOTE";
		let cleaned = str
			.toUpperCase()
			.normalize("NFD")
			.replace(/[\u0300-\u036f]/g, "") // Remove accents
			.replace(/[\s_\/]+/g, "-") // Convert spaces/separators to hyphens
			.replace(/[^A-Z0-9\-]/g, ""); // Keep alphanumeric and hyphens only
		
		// Remove redundant or trailing hyphens
		cleaned = cleaned.replace(/-+/g, "-").replace(/^-+|-+$/g, "");
		return cleaned || "LOTE";
	}

	// Helper: generate 4-character random hex slug
	function generateHexSlug(): string {
		return Math.floor((1 + Math.random()) * 0x10000)
			.toString(16)
			.substring(1)
			.toUpperCase();
	}

	// LocalStorage functions
	const STORAGE_KEY = "criterios_sensory_tracking_history";

	function getHistory(): HistoryItem[] {
		try {
			const data = localStorage.getItem(STORAGE_KEY);
			return data ? JSON.parse(data) : [];
		} catch (e) {
			console.error("Error reading localStorage history:", e);
			return [];
		}
	}

	function saveHistory(history: HistoryItem[]): void {
		try {
			localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
		} catch (e) {
			console.error("Error writing localStorage history:", e);
		}
	}

	// Render history table
	function renderHistoryTable(): void {
		if (!historyTbody || !noHistory) return;

		const history = getHistory();

		if (history.length === 0) {
			historyTbody.innerHTML = "";
			noHistory.style.display = "block";
			if (clearAllBtn) clearAllBtn.style.display = "none";
			return;
		}

		noHistory.style.display = "none";
		if (clearAllBtn) clearAllBtn.style.display = "inline-block";

		historyTbody.innerHTML = history
			.map((item) => {
				const encodedId = btoa(item.id);
				const prodUrl = `${window.location.origin}/experiencia/producto/?cid=${encodedId}`;
				const clientUrl = `${window.location.origin}/experiencia/cliente/?cid=${encodedId}`;

				return `
					<tr>
						<td><span class="tracking-id-badge">${item.id}</span></td>
						<td style="color: #fff; font-weight: 500;">${escapeHTML(item.label)}</td>
						<td style="color: rgba(255,255,255,0.5); font-size: 0.8rem;">${item.date}</td>
						<td>
							<div class="history-actions">
								<button type="button" class="action-link-btn js-copy-direct" data-url="${prodUrl}">${copyProd}</button>
								<button type="button" class="action-link-btn js-copy-direct" data-url="${clientUrl}">${copyClient}</button>
							</div>
						</td>
						<td>
							<button type="button" class="delete-btn js-delete-item" data-id="${item.id}">${deleteLabel}</button>
						</td>
					</tr>
				`;
			})
			.join("");

		// Attach delete events
		const deleteBtns = historyTbody.querySelectorAll(".js-delete-item");
		deleteBtns.forEach((btn) => {
			btn.addEventListener("click", (e) => {
				const target = e.currentTarget as HTMLButtonElement;
				const idToDelete = target.getAttribute("data-id");
				if (idToDelete) {
					deleteHistoryItem(idToDelete);
				}
			});
		});

		// Attach quick copy events for history rows
		const quickCopyBtns = historyTbody.querySelectorAll(".js-copy-direct");
		quickCopyBtns.forEach((btn) => {
			btn.addEventListener("click", async (e) => {
				const target = e.currentTarget as HTMLButtonElement;
				const url = target.getAttribute("data-url");
				if (url) {
					const success = await copyToClipboard(url);
					if (success) {
						const originalText = target.textContent;
						target.textContent = copySuccess;
						target.style.borderColor = "var(--color-gold)";
						target.style.color = "var(--color-gold)";
						
						setTimeout(() => {
							target.textContent = originalText;
							target.style.borderColor = "";
							target.style.color = "";
						}, 1500);
					}
				}
			});
		});
	}

	// Delete item from history
	function deleteHistoryItem(id: string): void {
		let history = getHistory();
		history = history.filter((item) => item.id !== id);
		saveHistory(history);
		renderHistoryTable();
	}

	// Escape HTML to prevent XSS
	function escapeHTML(str: string): string {
		return str
			.replace(/&/g, "&amp;")
			.replace(/</g, "&lt;")
			.replace(/>/g, "&gt;")
			.replace(/"/g, "&quot;")
			.replace(/'/g, "&#039;");
	}

	// Copy to clipboard utility
	async function copyToClipboard(text: string): Promise<boolean> {
		try {
			await navigator.clipboard.writeText(text);
			return true;
		} catch (e) {
			console.error("Failed to copy using clipboard API, trying fallback:", e);
			
			// Fallback input method
			const tempInput = document.createElement("input");
			tempInput.value = text;
			document.body.appendChild(tempInput);
			tempInput.select();
			try {
				document.execCommand("copy");
				document.body.removeChild(tempInput);
				return true;
			} catch (err) {
				document.body.removeChild(tempInput);
				return false;
			}
		}
	}

	// Generate and persist new ID
	if (generateBtn && lotInput && resultsArea && activeDescriptor && linkProducto && linkCliente) {
		generateBtn.addEventListener("click", () => {
			const descriptor = lotInput.value.trim() || "Lote Genérico";
			const cleanLot = cleanLotDescriptor(descriptor);
			const randomSlug = generateHexSlug();
			const trackingId = `CT-${cleanLot}-${randomSlug}`;
			const encodedId = btoa(trackingId);

			// Build final URLs
			const prodUrl = `${window.location.origin}/experiencia/producto/?cid=${encodedId}`;
			const clientUrl = `${window.location.origin}/experiencia/cliente/?cid=${encodedId}`;

			// Show links in UI
			activeDescriptor.textContent = descriptor;
			linkProducto.value = prodUrl;
			linkCliente.value = clientUrl;
			resultsArea.style.display = "block";

			// Get formatted local date/time
			const now = new Date();
			const dateStr = now.toLocaleDateString("es-ES", {
				day: "2-digit",
				month: "2-digit",
				year: "numeric",
			}) + " " + now.toLocaleTimeString("es-ES", {
				hour: "2-digit",
				minute: "2-digit"
			});

			// Save to LocalStorage History
			const history = getHistory();
			
			// Avoid duplicate IDs (very rare due to hex slug, but good safeguard)
			if (!history.some((item) => item.id === trackingId)) {
				history.unshift({
					id: trackingId,
					label: descriptor,
					date: dateStr,
				});
				saveHistory(history);
			}

			// Clear input and re-render history table
			lotInput.value = "";
			renderHistoryTable();
		});
	}

	// Copy buttons inside results area
	const copyBtns = document.querySelectorAll(".copy-btn");
	copyBtns.forEach((btn) => {
		btn.addEventListener("click", async (e) => {
			const target = e.currentTarget as HTMLButtonElement;
			const targetInputId = target.getAttribute("data-target");
			if (targetInputId) {
				const inputEl = document.getElementById(targetInputId) as HTMLInputElement | null;
				if (inputEl) {
					const success = await copyToClipboard(inputEl.value);
					if (success) {
						const originalText = target.textContent;
						target.textContent = copySuccess;
						target.classList.add("text-glow");
						setTimeout(() => {
							target.textContent = originalText;
							target.classList.remove("text-glow");
						}, 2000);
					}
				}
			}
		});
	});

	// Clear all history
	if (clearAllBtn) {
		clearAllBtn.addEventListener("click", () => {
			if (confirm(deleteConfirm)) {
				localStorage.removeItem(STORAGE_KEY);
				renderHistoryTable();
			}
		});
	}

	// Initialize history table on page load
	renderHistoryTable();

	// Hotfix: ensure window.location is defined (for static compilation/hydration)
	renderHistoryTable();
};

// Initialize if in browser
if (typeof document !== 'undefined') {
	document.addEventListener("DOMContentLoaded", initGenerator);
	// In case DOMContentLoaded already fired
	if (document.readyState === 'complete' || document.readyState === 'interactive') {
		initGenerator();
	}
}
