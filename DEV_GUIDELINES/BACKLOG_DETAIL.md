# 📋 Detalle del Backlog Técnico - Criterios v1.0

Este documento desglosa las tareas maestras sincronizadas en el ERP (Dolibarr) en sub-tareas accionables para el desarrollo en Astro.

---

- [x] ## 🛠️ PJ2-TSK-01: [DEV] Configuración de Entorno & Repositorio
* [x]   **1.1** **Auditoría Técnica:** Analizar el contenido previo del repositorio legacy para identificar activos, lógicas o SEO a preservar.
* [x]   **1.2** Inicializar proyecto Astro (`npm create astro@latest`) con TypeScript.
* [x]   **1.3** **Higiene de Archivos:** Adecuar el sistema de archivos posterior a la instalación de Astro (limpieza de boilerplate, configuración de alias de rutas).
* [x]   **1.4** Configurar repositorio Git local y remoto (GitHub/GitLab).
* [x]   **1.5** Estructurar carpetas según `TECH_STANDARDS.md` (Atomic Design).
* [x]   **1.6** Instalar dependencias base: `astro-icon`, `@fontsource/cinzel`, `@fontsource/inter`.
* [x]   **1.7** Configurar `tsconfig.json` y `astro.config.mjs` (Output: static).

- [ ] ## 🎨 PJ2-TSK-02: [UI/UX] Implementación de CDS v1.1
* [x]   **2.1** Definir variables CSS globales en `styles/main.css` (Colores Luxury Gold/Deep Space).
* [x]   **2.2** Configurar tipografías Cinzel (Headings) e Inter (Body).
* [ ]   **2.3** **Design System Suite (Lab):** Desarrollar una vista/ruta de desarrollo (`/design-system`) para visualizar cada componente, sus estados (hover, active), variantes de color y la estructura de las Content Collections (Data schemas).
* [x]   **2.4** Crear `BaseLayout.astro` con soporte para Meta Tags y estructura HTML5.
* [x]   **2.5** Implementar `SectionContainer.astro` con el patrón de textura "Stardust" (CSS Mask).
* [x]   **2.6** Crear `Button.astro` con variantes `solid` y `outline` (Efecto Glow).

- [x] ## 🚀 PJ2-TSK-03: [DEV] Construcción de Hero & CTA Principal
* [x]   **3.1** Desarrollar componente `Hero.astro` con narrativa "Conocimiento Ancestral".
* [x]   **3.2** Implementar gradiente de profundidad y texturas galácticas en el fondo.
* [x]   **3.3** Vincular el CTA principal al Catálogo o WhatsApp.
* [x]   **3.4** Optimización de imagen Hero para Mobile (LCP optimization).

- [x] ## 🍱 PJ2-TSK-04: [DEV] Catálogo Visual de Productos
* [x]   **4.1** Configurar Content Collection `products` en `src/content/config.ts`.
* [x]   **4.2** Crear archivos `.md` de prueba con placeholders de alta gama (Placeholders estéticos).
* [x]   **4.3** Desarrollar componente `ProductCard.astro` (Uso de `luxury_score`).
* [x]   **4.4** Implementar página de Catálogo (`/catalogo`) con Grid dinámico.
* [x]   **4.5** Crear página de Detalle de Producto (`/catalogo/[slug]`) con ficha técnica.

- [ ] ## ✍️ PJ2-TSK-05: [DEV] Blog de Concientización & Historia
* [ ]   **5.1** Configurar Content Collection `blog` con esquemas de Zod.
* [ ]   **5.2** Desarrollar componente `BlogCard.astro` para previsualización.
* [ ]   **5.3** Implementar página de listado del Blog (`/blog`).
* [ ]   **5.4** Crear Layout específico para artículos del Blog con soporte para Markdown.

- [ ] ## 📱 PJ2-TSK-06: [DEV] Footer & Canal de Conversión
* [ ]   **6.1** Desarrollar `Footer.astro` con enlaces a redes y canales de venta.
* [ ]   **6.2** Crear utilidad `whatsappLink.ts` para generar mensajes personalizados por producto.
* [ ]   **6.3** Implementar botón flotante de contacto (opcional para mobile).

- [ ] ## 🔍 PJ2-TSK-07: [QA/SEO] Optimización & Auditoría
* [ ]   **7.1** Configurar metadatos SEO globales y por página (OpenGraph/Twitter).
* [ ]   **7.2** Realizar auditoría de PageSpeed Insights (Meta: 90+ en Mobile).
* [ ]   **7.3** Verificación final de flujos de navegación según `SITE_MAP.md`.

---
*NativeCore - Gestión Quirúrgica de Proyectos.*