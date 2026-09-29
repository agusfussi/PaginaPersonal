# 🚀 Portfolio Profesional & Blog Personal

Sitio web personal desarrollado con **Astro** y **Tailwind CSS**, diseñado con estética minimalista moderna (dark mode) para vender servicios de desarrollo web, exhibir proyectos y documentar actividades formativas (Facultad, Secundaria, Cursos).

---

## 🌟 Características Principales

- ⚡ **Velocidad Extrema & SEO:** Creado sobre la arquitectura de islas de Astro con 95+ en Google Lighthouse y carga en menos de 1 segundo.
- 💼 **Diseñado para Vender Servicios:**
  - Sección Hero de alto impacto con llamado a la acción claro.
  - Catálogo de 6 servicios profesionales clave con beneficios y proceso de trabajo paso a paso.
  - Botón directo de **WhatsApp**, copia rápida de email y formulario de contacto.
- 📂 **Showcase de Proyectos con Filtros:**
  - Proyectos categorizados en *Comercial*, *Aplicación Web*, *E-commerce* y *Facultad / Académico*.
  - Filtros en tiempo real sin recargar página.
  - Métricas destacadas y enlaces directos a código fuente y demo online.
- 🎓 **Trayectoria Académica & Formativa:**
  - Línea de tiempo visual destacando:
    - **Facultad / Universidad:** Carrera, materias clave, algoritmos y proyectos en equipo.
    - **Educación Secundaria:** Formación técnica/bachiller, proyecto integrador.
    - **Certificaciones:** Cursos y aprendizaje continuo.
- ✍️ **Blog Integrado con Markdown:**
  - Motor de publicaciones nativo con Zod y Astro Content Layer.
  - Categorías y etiquetas automáticas.
  - 4 artículos iniciales de alta calidad listos para usar o personalizar.
- 📱 **100% Responsivo:** Adaptado a dispositivos móviles, tablets y monitores ultrawide.

---

## 🛠️ Comandos de Desarrollo

```bash
# Iniciar el servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Previsualizar la compilación de producción localmente
npm run preview
```

El servidor estará disponible en [http://localhost:4321](http://localhost:4321).

---

## ⚙️ ¿Cómo personalizar tus datos?

Todos los datos principales están organizados en archivos simples y ordenados:

### 1. Datos Personales y Redes (`src/data/siteConfig.ts`)
Abre [src/data/siteConfig.ts](file:///c:/PaginaPersonal/src/data/siteConfig.ts) para cambiar:
- Tu nombre completo
- Tu email de contacto
- Tu número de WhatsApp (para recibir mensajes directos)
- Tus enlaces a GitHub y LinkedIn
- Tu disponibilidad para nuevos proyectos

### 2. Proyectos (`src/data/projects.ts`)
Abre [src/data/projects.ts](file:///c:/PaginaPersonal/src/data/projects.ts) para agregar, editar o eliminar proyectos. Puedes incluir proyectos de clientes, proyectos propios o trabajos prácticos de la facultad.

### 3. Educación y Trayectoria (`src/data/education.ts`)
Abre [src/data/education.ts](file:///c:/PaginaPersonal/src/data/education.ts) para adaptar:
- La universidad donde estudias, la carrera y año de ingreso/cursada.
- Tu colegio secundario y título obtenido.
- Cursos y certificaciones adicionales.

### 4. Blog y Artículos (`src/content/blog/`)
Para publicar un nuevo artículo, simplemente crea un archivo `.md` dentro de `src/content/blog/` con el siguiente encabezado:

```markdown
---
title: "Título de tu nuevo artículo"
description: "Breve resumen de 1 a 2 líneas."
pubDate: 2026-04-01
category: "Facultad & Aprendizaje" # o "Desarrollo Web & Negocios", etc.
tags: ["Astro", "Programación", "Facultad"]
author: "Tu Nombre"
readTime: "3 min de lectura"
featured: true
---

Aquí escribes el contenido en formato Markdown estándar...
```

---

## 🌐 Cómo desplegar tu web gratis

Puedes publicar esta web en internet en 2 minutos usando plataformas gratuitas con despliegue continuo desde GitHub:

1. **Vercel:** Conecta tu repositorio de GitHub en [vercel.com](https://vercel.com) y detectará Astro automáticamente.
2. **Netlify:** Importa tu repositorio en [netlify.com](https://netlify.com).
3. **GitHub Pages:** Puedes desplegar usando la GitHub Action oficial de Astro.
