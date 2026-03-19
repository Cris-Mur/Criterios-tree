# 🌌 Criterios Tree - Luxury Experience

Repositorio oficial del ecosistema digital de **Criterios**, una plataforma de alto impacto visual orientada al sector de panadería artesanal y concienciación. Este proyecto ha sido migrado de una arquitectura legacy HTML a un entorno profesional utilizando **Astro 6.0.0**.

---

## 🚀 Arquitectura Técnica
El proyecto implementa **Atomic Design** y **Island Architecture** para maximizar el rendimiento y la mantenibilidad.

### Tecnologías Core
- **Framework:** Astro 6.0.0 (SSG)
- **Lenguaje:** TypeScript (Strict Mode)
- **Gestor de Paquetes:** pnpm
- **Estilos:** Vanilla CSS con Variables Nativas (CDS v1.1)
- **Iconos:** Astro-Icon

---

## 📂 Estructura del Proyecto

```text
/
├── public/              # Activos estáticos (Docs, Favicon)
├── src/
│   ├── assets/          # Imágenes, Branding e Iconos (Procesados por Astro)
│   ├── components/      # Componentes UI (Atomic Design)
│   │   ├── ui/          # Átomos (Botones, Links)
│   │   ├── layout/      # Moléculas/Organismos (Header, Footer)
│   │   └── sections/    # Secciones de página (Hero, Grid)
│   ├── content/         # Colecciones (Blog, Productos)
│   ├── layouts/         # Plantillas Base
│   ├── pages/           # Rutas del sitio
│   ├── styles/          # CSS Global y variables
│   └── utils/           # Lógica y funciones auxiliares
├── astro.config.mjs     # Configuración de Astro
└── tsconfig.json        # Configuración de TypeScript y Alias (@components, etc)
```

---

## 🛠️ Desarrollo

### Instalación
```bash
pnpm install
```

### Comandos Disponibles
| Comando | Acción |
| :--- | :--- |
| `pnpm dev` | Inicia el servidor de desarrollo en `localhost:4321` |
| `pnpm build` | Genera el sitio estático optimizado en `./dist/` |
| `pnpm preview` | Previsualiza la build de producción localmente |
| `pnpm astro ...` | Ejecuta comandos de la CLI de Astro |

---

## 🎨 Design System (CDS v1.1)
El diseño se basa en una estética **Luxury/Galactic**:
- **Primario:** Gold (#D4AF37)
- **Fondo:** Deep Space (#050505)
- **Tipografía:** Cinzel (Títulos) e Inter (Cuerpo)

---
*Desarrollado con rigor técnico por NativeCore.*
