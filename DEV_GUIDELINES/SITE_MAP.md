# 🗺️ Mapa del Sitio (Site Map) - Criterios v1.0

Este documento detalla la arquitectura de información, las rutas y el flujo de navegación del ecosistema digital de **Criterios**, basado en la maqueta aprobada.

---

## 🏛️ Elementos Globales (Shared Components)
| Componente | Descripción | Elementos Clave |
| :--- | :--- | :--- |
| **Header** | Navegación Principal | Logo, Links (Home, Catálogo, Blog, Nosotros), Botón CTA WhatsApp. |
| **Footer** | Cierre de Marca | Redes Sociales, Canales de Venta, Políticas de Privacidad, Copyright. |

---

## 📄 Estructura de Páginas (Routes)

### 1. Home (`/`)
*   **Propósito:** Presentación de marca y captura de interés inicial.
*   **Secciones:**
    *   **Hero Section:** Eslogan "El Sabor del Conocimiento Ancestral" + CTA "Explorar Catálogo".
    *   **Servicios (Propuesta de Valor):** Tarjetas Luxury explicando el enfoque medicinal/recreativo adulto.
    *   **Productos Destacados:** Carrusel o Grid con los 3 productos con mayor `luxury_score`.
    *   **Banner Canales de Venta:** Acceso rápido a puntos físicos/virtuales.
    *   **Call to Action Final:** Botón flotante o sección de contacto directo.

### 2. Catálogo (`/catalogo`)
*   **Propósito:** Exhibición estética del portafolio completo.
*   **Secciones:**
    *   **Filtros Dinámicos:** Categorías (Brownies, Chocolates, Gomas, etc.).
    *   **Product Grid:** Tarjetas con texturas rústicas/galácticas.
    *   **Detalle Rápido:** Hover effects para previsualizar beneficios ancestrales.

### 3. Detalle de Producto (`/catalogo/[slug]`)
*   **Propósito:** Educación profunda y conversión.
*   **Secciones:**
    *   **Product Showcase:** Galería de imágenes (Placeholders de alta gama).
    *   **Ficha Técnica:** Ingredientes (extractos), beneficios medicinales y ritual de uso.
    *   **CTA de Compra:** Botón "Solicitar vía WhatsApp" con mensaje predefinido.

### 4. Blog / Concientización (`/blog`)
*   **Propósito:** Generar autoridad y SEO sobre medicina natural.
*   **Secciones:**
    *   **Featured Article:** El post más reciente o relevante.
    *   **Article List:** Grid de entradas con categorías (Ancestralidad, Bienestar).

### 5. Nosotros (`/nosotros`)
*   **Propósito:** Humanizar la marca y transmitir tradición.
*   **Secciones:**
    *   **Historia de Criterios:** Narrativa sobre la evolución de la repostería artesanal.
    *   **Nuestro Propósito:** Compromiso con la salud mental y física adulta.

### 6. Canales de Venta (`/donde-comprar`)
*   **Propósito:** Facilitar la adquisición física.
*   **Secciones:**
    *   **Puntos de Venta:** Listado de tiendas aliadas con links a Google Maps.
    *   **Venta Digital:** Enlaces directos a plataformas de terceros o WhatsApp.

---

## 🔄 Flujo de Conversión (User Journey)
1. **Entrada:** Usuario llega a `Home` vía Redes Sociales.
2. **Descubrimiento:** Navega hacia `Catálogo` o lee un artículo en el `Blog`.
3. **Deseo:** Visualiza un `Producto` y sus beneficios medicinales.
4. **Acción:** Clic en CTA de WhatsApp -> **Conversión (Venta asistida).**

---

## 🛠️ Próximas Acciones Técnicas
- Inicializar rutas en Astro bajo el estándar de páginas SSG.
- Configurar el Layout base con Header y Footer compartidos.
- Inyectar el CDS v1.1 en los componentes globales.
