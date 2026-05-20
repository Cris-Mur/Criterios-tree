/**
 * Logic for feedback forms (Product and Client experience)
 */
export const initFeedbackForm = (textareaId: string, counterId: string, limit: number) => {
	// Handle CID decoding and pre-filling
	const cidInput = document.getElementById("cid-input") as HTMLInputElement | null;
	if (cidInput) {
		const urlParams = new URLSearchParams(window.location.search);
		const rawCid = urlParams.get("cid");
		
		if (rawCid) {
			try {
				// Decode from Base64
				cidInput.value = atob(rawCid);
			} catch (e) {
				// Fallback if not valid base64
				cidInput.value = rawCid;
			}
		}
	}

	// Character Counter JS Logic
	const feedbackTextarea = document.getElementById(textareaId) as HTMLTextAreaElement | null;
	const charCounter = document.getElementById(counterId) as HTMLSpanElement | null;

	if (feedbackTextarea && charCounter) {
		feedbackTextarea.addEventListener("input", () => {
			const currentLength = feedbackTextarea.value.length;
			charCounter.textContent = `${currentLength}/${limit}`;

			// Visual indicator thresholds
			if (currentLength >= limit * 0.9) {
				charCounter.classList.add("near-limit");
			} else {
				charCounter.classList.remove("near-limit");
			}

			if (currentLength >= limit) {
				charCounter.classList.add("at-limit");
			} else {
				charCounter.classList.remove("at-limit");
			}
		});
	}
};
