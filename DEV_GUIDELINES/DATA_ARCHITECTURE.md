# 🏗️ Arquitectura de Datos - Criterios v1.0

Este documento define la estructura de datos que alimentará el sitio en Astro, utilizando **Content Collections** para garantizar la integridad y el rendimiento.

## 1. Colección: `products` (Catálogo / Producto)
Ubicación: `src/content/products/*.md`

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| `id` | Slug | Identificador único para la URL (ej: `brownie-ancestral`). |
| `name` | String | Nombre comercial del producto. |
| `category` | Enum | `Brownie`, `Chocolate`, `Marshmello`, `Aromática`, `Goma`. |
| `tagline` | String | Frase corta de impacto (ej: "Relajación Profunda"). |
| `description` | Markdown | Descripción detallada del producto y su historia. |
| `image` | Path | Ruta a la imagen de alta calidad (webp). |
| `benefits` | Array | Lista de beneficios medicinales/ancestrales. |
| `ingredients` | Array | Lista de ingredientes clave (extractos, hongos, etc). |
| `luxury_score` | Number | 1-10. Define el nivel de efectos visuales en la UI. |
| `is_featured` | Boolean | Si aparece en la sección "Hero" o destacada. |
| `whatsapp_msg` | String | Mensaje personalizado para el CTA de compra. |
| `legal_warning` | Markdown | (POST-MVP) Advertencia legal específica del producto. |
| `age_restricted`| Boolean | (POST-MVP) Si el producto requiere validación de +18 años. |

---

## 2. Colección: `blog` (Concientización & Historia)
Ubicación: `src/content/blog/*.md`

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| `title` | String | Título del artículo. |
| `pubDate` | Date | Fecha de publicación. |
| `author` | String | Autor (Default: NativeCore/Criterios). |
| `excerpt` | String | Resumen para la tarjeta de previsualización. |
| `category` | Enum | `Medicina Natural`, `Recetas`, `Comunidad`, `Ancestralidad`. |
| `image` | Path | Imagen de portada. |
| `tags` | Array | Etiquetas SEO. |
| `content` | Markdown | Cuerpo del artículo. |

---

## 3. Datos Globales: `site_config` (Configuración)
Ubicación: `src/data/site.json`

| Campo | Descripción |
| :--- | :--- |
| `site_name` | "Criterios - Repostería Ancestral". |
| `tagline` | "El Sabor del Conocimiento Ancestral". |
| `contact` | Objeto con: `phone`, `email`, `whatsapp_link`, `instagram`, `facebook`. |
| `location` | Objeto con: `address`, `google_maps_link`. |
| `seo` | Objeto con: `meta_description`, `keywords`, `og_image`. |

---

## 🧱 Estructura de Componentes Astro (Mapping)
- **`ProductCard.astro`**: Consume datos de la colección `products`.
- **`BlogPreview.astro`**: Consume datos de la colección `blog`.
- **`HeroSection.astro`**: Consume datos de `site.json` y productos destacados.
- **`SalesChannelGrid.astro`**: Consume datos de `site.json` (Canales de Venta).

---

## 🚀 Próximos Pasos
1. Validar esquemas con las capturas de la maqueta aprobada.
2. Generar datos de prueba (Mock Data) para el prototipo funcional.
3. Configurar `config.ts` en Astro con Zod para validación de tipos.
