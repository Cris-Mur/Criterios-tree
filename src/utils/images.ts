import { getImage } from 'astro:assets';

interface ImageTransformOptions {
	src: ImageMetadata;
	width?: number;
	height?: number;
	quality?: number | 'low' | 'mid' | 'high' | 'max';
	format?: 'webp' | 'avif' | 'png' | 'jpg';
}

/**
 * Criterios Image Engine
 * Abstracción para el procesamiento y optimización de imágenes.
 */
export const imageEngine = {
	/**
	 * Procesa una imagen manteniendo proporciones si solo se define un eje.
	 */
	async transform(options: ImageTransformOptions) {
		const qualityMap = {
			low: 30,
			mid: 60,
			high: 80,
			max: 100
		};

		const finalQuality = typeof options.quality === 'string' 
			? qualityMap[options.quality] 
			: (options.quality || 80);

		return await getImage({
			src: options.src,
			width: options.width,
			height: options.height,
			quality: finalQuality,
			format: options.format || 'webp'
		});
	},

	/**
	 * Preset para imágenes de fondo de alto impacto (Hero).
	 */
	async getHeroBackground(src: ImageMetadata) {
		return this.transform({
			src,
			width: 1920,
			quality: 'high',
			format: 'webp'
		});
	}
};
