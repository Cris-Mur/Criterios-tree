# 🎨 Criterios Design System (CDS) v1.2

**Estatus:** En Revisión (Proposal)
**Propietario:** Cristian (CTO / NativeCore)
**Framework Destino:** Astro

---

## 1. Fundamentos Visuales (Design Tokens)

### 🎨 Paleta de Colores (Luxury/Ancestral)
*Equilibrio entre la mística espacial y el origen botánico.*
- **Primary (Luxury Gold):** `#D4AF37` (Acentos y botones principales).
- **Secondary (Magic Purple):** `#4B0082` (Detalles de marca mística).
- **Accent (Ancestral Green):** `#064E3B` (Profundidad botánica y medicinal).
- **Neutral (Deep Bronze):** `#8B4513` (Bordes y elementos de separación).
- **Background (Deep Space):** `#050505` (Fondo principal modo oscuro).
- **Text (Off-White):** `#F8F9FA` (Texto de cuerpo).

### 🖋️ Tipografía
- **Principal (Headings):** `Cinzel` (Elegancia clásica).
- **Cuerpo (Body):** `Inter` (Legibilidad moderna).
- **Escala:** 1rem (Base), 1.25rem (Medium), 1.5rem (Large), 2.5rem (XL - Hero Title).

### 🧊 Texturas y Patrones
- **Pattern A (Stardust):** Gradiente radial + CSS Mask para profundidad espacial.
- **Pattern B (Organic Texture):** Texturas de mármol negro o piedra volcánica.

---

## 2. Principios de Animación (Motion Tokens)
*Estilos diseñados para la fluidez y el impacto visual.*

### Estrategia de Implementación
1.  **Animation-Ready Styles:** Todos los componentes críticos (Buttons, Cards, Hero) deben basar su estado visual en **Variables CSS** para permitir transiciones suaves (`transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1)`).
2.  **Micro-interacciones (CSS):** Hovers, focus y estados activos se gestionarán mediante CSS nativo para máximo rendimiento.
3.  **Orquestación (GSAP):** Para secuencias complejas (Entrada del Hero, scroll parallax de productos), se utilizará GSAP garantizando que los estilos base sean manipulables vía `opacity`, `transform` y `filter`.
4.  **Hardware Acceleration:** Priorizar animaciones sobre propiedades compuestas (`translate3d`, `scale`) para evitar re-paints costosos.

---

## 3. Componentes de UI (Astro Components)

### 🧱 Layouts
- `BaseLayout.astro`: Meta Tags + SEO.
- `SectionContainer.astro`: Soporte para `overflow-hidden` y gradientes de profundidad.

### 🔘 Elementos de Acción
- `Button.astro`: 
  - `solid`: Background Gold, Texto Black.
  - `outline`: Border Gold, Texto Gold, Hover Glow effect (Animation-Ready).

---

## 4. Design System Suite (Component Lab)
*Ruta de desarrollo: `/design-system`*

El "Lab" permitirá visualizar:
- **Color Grid:** Muestra de toda la paleta y contrastes.
- **Typography Scale:** Pruebas de jerarquía de textos.
- **Component Showcase:** Visualización de botones y tarjetas en todos sus estados animados.
- **Data Schemas:** Previsualización de cómo se renderizan los datos de las Content Collections.

---

## ⚙️ Mantenibilidad y Escalabilidad
1. **Variables CSS:** Uso intensivo de `:root { --color-primary: #D4AF37; --anim-duration: 0.3s; ... }`.
2. **Framework:** 100% Astro SSG.
3. **Optimización:** WebP/AVIF con lazy loading.


