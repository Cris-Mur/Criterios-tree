# ADR-001: Adopción de Astro como Framework Principal

**Fecha:** 2026-03-18
**Estado:** Aceptado
**Arquitecto:** Cristian (CTO / NativeCore)

## 📌 Contexto
El cliente "Criterios" requiere una Landing Page de alto impacto visual ("Luxury/Galactic") enfocada en un público adulto. El flujo de conversión no requiere e-commerce directo (pasarela de pagos), sino un catálogo vitrina que redirige a canales de venta externos (WhatsApp/Físico).

El rendimiento móvil es una prioridad absoluta (dispositivo principal de su demografía) y el diseño incluirá texturas pesadas y gráficos de alta calidad.

## ⚖️ Alternativas Consideradas
1. **React / Next.js (SPA/SSR):** Exceso de JavaScript en el cliente para un sitio mayormente estático. Sobrecarga innecesaria.
2. **WordPress / CMS Tradicional:** Difícil de blindar y optimizar para un rendimiento 100/100 en Core Web Vitals sin plugins pesados.
3. **Vanilla HTML/CSS:** Difícil de mantener y escalar si el cliente decide expandir el blog o el catálogo en el futuro.

## 🚀 Decisión
Se adopta **Astro** como framework de renderizado estático (SSG).

## 📊 Justificación (Por qué es la mejor opción)
- **Zero-JS por defecto:** Astro envía HTML puro al navegador, garantizando tiempos de carga casi instantáneos incluso en redes móviles 3G/4G.
- **Arquitectura de Islas (Island Architecture):** Permite usar componentes interactivos (ej. filtros de catálogo) solo donde es estrictamente necesario.
- **Soporte Nativo Markdown/MDX:** Ideal para gestionar la sección del "Blog de Concientización" sin necesidad de montar una base de datos o headless CMS en esta fase.
- **Gestión de Assets:** Optimización automática de imágenes (WebP) fundamental para mantener la estética "Luxury" sin penalizar la velocidad.

## 📈 Consecuencias (Impacto)
- **Positivo:** TBT (Total Blocking Time) mínimo. Ventaja competitiva en SEO.
- **Negativo/Reto:** Si en el futuro (Fase 2) el cliente requiere un carrito de compras complejo con estado persistente, requerirá integración con un framework de UI (React/Svelte) dentro de las islas de Astro.