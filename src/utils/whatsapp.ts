/**
 * Genera un enlace de WhatsApp con un mensaje personalizado.
 * @param message Mensaje que se pre-cargará en el chat.
 */
export function getWhatsAppLink(message: string): string {
	const phone = import.meta.env.PUBLIC_WHATSAPP_PHONE || '570000000000';
	const encodedMessage = encodeURIComponent(message);
	return `https://wa.me/${phone}?text=${encodedMessage}`;
}

export const CRITERIOS_WHATSAPP = import.meta.env.PUBLIC_WHATSAPP_PHONE;
