import siteDataRaw from "@data/site.json";
import type { SiteData } from "./schemas";

/**
 * Utilidad de WhatsApp
 * Centraliza la lógica para generar enlaces de contacto directo con la marca.
 */

// Casteamos los datos del sitio para asegurar el tipado
const siteData = siteDataRaw as SiteData;

/** Teléfono de contacto configurado en las variables de entorno o fallback del sitio. */
export const CRITERIOS_WHATSAPP: string =
	(import.meta.env.PUBLIC_WHATSAPP_PHONE as string) || siteData.global.contact.phone;

/**
 * Genera un enlace de WhatsApp (`wa.me`) con un mensaje pre-cargado.
 *
 * @param message - Texto que aparecerá en el chat del usuario al iniciar la conversación.
 * @returns La URL completa de WhatsApp.
 *
 * @example
 * getWhatsAppLink("Hola! Quiero información sobre el Brownie Ancestral.");
 */
export function getWhatsAppLink(message: string): string {
	const phone = CRITERIOS_WHATSAPP.replace(/\s+/g, ""); // Limpiamos espacios si los hubiera
	const encodedMessage = encodeURIComponent(message);
	return `https://wa.me/${phone}?text=${encodedMessage}`;
}
