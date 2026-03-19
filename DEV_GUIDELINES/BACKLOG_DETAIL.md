# 📋 Detalle del Backlog Técnico - Criterios v1.0

Este documento desglosa las tareas maestras sincronizadas en el ERP (Dolibarr) en sub-tareas accionables para el desarrollo en Astro.

---

- [x] ## 🛠️ PJ2-TSK-01: [DEV] Configuración de Entorno & Repositorio
* [x]   **1.1** **Auditoría Técnica:** Analizar el contenido previo del repositorio legacy para identificar activos, lógicas o SEO a preservar.
* [x]   **1.2** Inicializar proyecto Astro (`npm create astro@latest`) con TypeScript.
* [x]   **1.3** **Higiene de Archivos:** Adecuar el sistema de archivos posterior a la instalación de Astro (limpieza de boilerplate, configuración de alias de rutas).
* [x]   **1.4** Configurar repositorio Git local y remoto (GitHub/GitLab).
* [x]   **1.5** Estructurar carpetas según `TECH_STANDARDS.md` (Atomic Design).
* [x]   **1.6** Instalar dependencias base: `pnpm install`.
* [x]   **1.7** Configurar `tsconfig.json` y `astro.config.mjs` (Output: static).

- [x] ## 🎨 PJ2-TSK-02: [UI/UX] Implementación de CDS v1.1
* [x]   **2.1** Definir variables CSS globales en `styles/main.css` (Colores Luxury Gold/Deep Space).
* [x]   **2.2** Configurar tipografías Cinzel (Headings) e Inter (Body).
* [x]   **2.3** **Design System Suite (Lab):** Desarrollar vista `/design-system` con auditoría de datos y media (Zod validation).
* [x]   **2.4** Crear `BaseLayout.astro` modularizado con `BaseHead.astro` y `SEO.astro`.
* [x]   **2.5** Implementar `SectionContainer.astro` con soporte para props de estilo dinámico.
* [x]   **2.6** Crear `Button.astro`, `Icon.astro` (Nativo) y `ProductCard.astro`.

- [x] ## 🚀 PJ2-TSK-03: [DEV] Construcción de Hero & CTA Principal
* [x]   **3.1** Desarrollar componente `Hero.astro` con narrativa "Conocimiento Ancestral".
* [x]   **3.2** Implementar gradiente de profundidad y texturas galácticas en el fondo.
* [x]   **3.3** Vincular el CTA principal al Catálogo o WhatsApp.
* [x]   **3.4** Optimización de imagen Hero para Mobile (LCP optimization).

- [x] ## 🍱 PJ2-TSK-04: [DEV] Catálogo Visual de Productos
* [x]   **4.1** Configurar Content Collection `products` en `src/content.config.ts` (Content Layer).
* [x]   **4.2** Crear archivos `.md` de prueba con placeholders de alta gama.
* [x]   **4.3** Desarrollar componente `ProductCard.astro` (Uso de `luxury_score`).
* [x]   **4.4** Implementar página de Catálogo (`/catalogo`) con Grid dinámico.
* [x]   **4.5** Crear página de Detalle de Producto (`/catalogo/[id]`) con ficha técnica y WhatsApp dinámico.

- [x] ## ✍️ PJ2-TSK-05: [DEV] Blog de Concientización & Historia
* [x]   **5.1** Configurar Content Collection `blog` con esquemas de Zod.
* [x]   **5.2** Desarrollar componente `BlogCard.astro` para previsualización.
* [x]   **5.3** Implementar página de listado del Blog (`/blog`).
* [x]   **5.4** Crear `BlogLayout.astro` para artículos con soporte para Markdown y lectura optimizada.

- [x] ## 📱 PJ2-TSK-06: [DEV] Footer & Canal de Conversión
* [x]   **6.1** Desarrollar `Footer.astro` con enlaces a redes y canales de venta.
* [x]   **6.2** Crear utilidad `whatsapp.ts` consumiendo variables de entorno (.env).
* [x]   **6.3** Integración global en `BaseLayout.astro`.

- [x] ## ⚙️ PJ2-TSK-08: [CORE] Motores de Animación e Imágenes
* [x]   **8.1** Abstraer lógica de GSAP en `AnimationEngine` (`animations.ts`).
* [x]   **8.2** Implementar `ImageEngine` para procesamiento proporcional y presets de calidad (`images.ts`).
* [x]   **8.3** Configurar validación de esquemas Zod para datos estáticos (`schemas.ts`).

- [x] ## 🎬 PJ2-TSK-09: [UI/UX] Cinematic Hero 2.0
* [x]   **9.1** Implementar Scroll-driven animations (Scale, Blur, Parallax).
* [x]   **9.2** Desarrollar efecto "Coin Rotation" (3D idle) y Brillo Radioactivo.
* [x]   **9.3** Composición asimétrica (Justificación a la derecha) y optimización `dvh`.

- [x] ## 🏢 PJ2-TSK-10: [DEV] Flujo de Marca & Presencia
* [x]   **10.1** Implementar página de Nosotros (`/nosotros`) con línea de tiempo evolutiva.
* [x]   **10.2** Implementar página de Tiendas (`/donde-comprar`) con mapas y contacto.
* [x]   **10.3** Centralizar narrativa en `about.json` y `stores.json`.

- [ ] ## 🔍 PJ2-TSK-07: [QA/SEO] Optimización & Auditoría (Hito Final)
* [ ]   **7.1** Configurar metadatos SEO globales y por página (OpenGraph/Twitter).
* [ ]   **7.2** Realizar auditoría de PageSpeed Insights (Meta: 90+ en Mobile).
* [ ]   **7.3** Verificación final de flujos de navegación según `SITE_MAP.md`.

---
*NativeCore - Gestión Quirúrgica de Proyectos.*
