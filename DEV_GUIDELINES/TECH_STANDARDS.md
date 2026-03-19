# 🛠️ Estándares Técnicos y de Desarrollo - Criterios v1.0

Este documento define las reglas de ingeniería, arquitectura y estilo para la construcción del ecosistema digital de **Criterios** utilizando **Astro**.

---

## 🏗️ 1. Arquitectura del Repositorio
Se seguirá la estructura estándar de Astro, optimizada para **Content Collections**.

```text
/
├── public/              # Activos estáticos (Favicon, Robots.txt)
├── src/
│   ├── assets/          # Imágenes, fuentes y vectores (procesados por Astro)
│   ├── components/      # Componentes UI (Atomic Design)
│   │   ├── ui/          # Elementos base (Botones, Inputs)
│   │   ├── layout/      # Header, Footer, Sidebars
│   │   └── sections/    # Bloques de página (Hero, Grid, etc.)
│   ├── content/         # Colecciones de Markdown (Products, Blog)
│   │   └── config.ts    # Definición de Esquemas con Zod
│   ├── layouts/         # Plantillas de página (BaseLayout.astro)
│   ├── pages/           # Rutas del sitio (index.astro, blog/[slug].astro)
│   ├── styles/          # CSS Global y variables (main.css)
│   └── data/            # JSONs de configuración (site.json)
├── astro.config.mjs     # Configuración del Framework
└── tsconfig.json        # Configuración de TypeScript
```

---

## 🎨 2. Estilo de Código y UI
Para garantizar la mantenibilidad y el rendimiento:

### CSS & Styling
- **Enfoque:** Vanilla CSS con variables nativas (`:root`).
- **Nomenclatura:** BEM (Block Element Modifier) para clases complejas.
- **Variables Críticas:** Colores del CDS v1.1 (#D4AF37, #050505, etc.) definidos en `styles/main.css`.
- **Rendimiento:** Evitar librerías pesadas de animaciones; preferir CSS Transitions y Web Animations API.

### JavaScript / TypeScript
- **Estándar:** ECMAScript moderno (ES2022+).
- **Tipado:** Uso obligatorio de TypeScript para Props de componentes.
- **Responsabilidad:** Lógica mínima por componente. Funciones auxiliares en `src/utils/`.

---

## ⚙️ 3. Configuración Base de Astro
- **Output:** `static` (SSG - Static Site Generation).
- **Imágenes:** Uso del componente `<Image />` de Astro para optimización automática a WebP/AVIF.
- **SEO:** Inyección obligatoria de Meta Tags (OpenGraph, Twitter Cards) en `BaseLayout.astro`.
- **I18n:** Preparado para soporte multi-idioma (Español base).

---

## 🛡️ 4. Reglas de Gestión Operativa (COO)
Para cumplir con la política **POL-ARC**:

1.  **Commits:** Formato `[TYPE][VERB][DESCRIPTION]` (Ej: `[FEAT][Add][Implementation of Hero section]`).
2.  **Ramas:**
    - `main`: Producción (SLA 100% estabilidad).
    - `dev`: Integración de features.
    - `feature/*`: Desarrollo de tareas del backlog de Dolibarr.
3.  **Validación:** Antes de cada merge a `main`, se debe realizar un `astro check` y un build de prueba.

---

## 📦 5. Dependencias Permitidas
*Evitar el "Dependency Hell".*
- **Core:** Astro.
- **Validation:** Zod (nativo en Astro Collections).
- **Icons:** Astro-Icon (vía SVGs locales).
- **Fonts:** Fontsource (para Cinzel e Inter).

---
*NativeCore - Eficiencia en el Código, Excelencia en el Producto.*